module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.session && req.session.user) {
            req.user = req.session.user;
            return next();
        }
        req.flash('error_msg', 'Por favor inicia sesión para acceder');
        res.redirect('/login');
    }
};