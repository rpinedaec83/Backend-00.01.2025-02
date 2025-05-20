const express = require('express');
const router = express.Router();
const db = require('./db');
const passport = require('./auth');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard');
  });

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
  try {
    const [packages] = await db.query(
      'SELECT p.*, ' +
      '(SELECT GROUP_CONCAT(l.location, "|", l.timestamp SEPARATOR "||") FROM locations l WHERE l.package_id = p.id) AS locations, ' +
      '(SELECT GROUP_CONCAT(m.content, "|", m.created_at SEPARATOR "||") FROM messages m WHERE m.package_id = p.id) AS messages ' +
      'FROM packages p ' +
      'WHERE p.user_id = ?',
      [req.user.id]
    );

    const processedPackages = packages.map(package => ({
      ...package,
      locations: package.locations ? package.locations.split('||').map(loc => {
        const [location, timestamp] = loc.split('|');
        return { location, timestamp };
      }) : [],
      messages: package.messages ? package.messages.split('||').map(msg => {
        const [content, created_at] = msg.split('|');
        return { content, created_at };
      }) : []
    }));

    res.render('dashboard', { 
      user: req.user,
      packages: processedPackages
    });
  } catch (error) {
    console.error('Error al obtener los paquetes:', error);
    res.status(500).send('Error al cargar el dashboard');
  }
});

router.post('/packages', ensureAuthenticated, async (req, res) => {
  try {
    const { destination, message } = req.body;
    const [result] = await db.query('INSERT INTO packages (user_id, destination, status, current_location) VALUES (?, ?, ?, ?)', 
      [req.user.id, destination, 'En proceso', 'Oficina central']);
    
    const packageId = result.insertId;
    
    if (message) {
      await db.query('INSERT INTO messages (package_id, content) VALUES (?, ?)', [packageId, message]);
    }
    
    await db.query('INSERT INTO locations (package_id, location) VALUES (?, ?)', [packageId, 'Oficina central']);
    
    res.json({ id: packageId, destination, status: 'En proceso', current_location: 'Oficina central' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paquete' });
  }
});
router.post('/packages/:id/location', ensureAuthenticated, async (req, res) => {
  try {
    const { location } = req.body;
    await db.query('UPDATE packages SET current_location = ? WHERE id = ?', [location, req.params.id]);
    await db.query('INSERT INTO locations (package_id, location) VALUES (?, ?)', [req.params.id, location]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ubicación' });
  }
});

router.post('/packages/:id/messages', ensureAuthenticated, async (req, res) => {
  try {
    const { content } = req.body;
    await db.query('INSERT INTO messages (package_id, content) VALUES (?, ?)', [req.params.id, content]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el mensaje' });
  }
});

router.get('/packages/:id', ensureAuthenticated, async (req, res) => {
  try {
    const [package] = await db.query('SELECT * FROM packages WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
    if (package.length === 0) {
      return res.status(404).json({ error: 'Paquete no encontrado' });
    }
    
    const [messages] = await db.query('SELECT * FROM messages WHERE package_id = ?', [req.params.id]);
    const [locations] = await db.query('SELECT * FROM locations WHERE package_id = ?', [req.params.id]);
    
    res.json({
      ...package[0],
      messages,
      locations
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el paquete' });
  }
});

module.exports = router;