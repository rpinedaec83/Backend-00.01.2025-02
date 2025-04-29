const http = require('http');
const connectDB = require('./src/config/database');
const ShoppingListService = require('./src/services/shoppingListService');
const ShoppingListController = require('./src/controllers/shoppingListController');
const routes = require('./src/routes/shoppingListRoutes');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const db = await connectDB();
    const shoppingListService = new ShoppingListService(db);
    const shoppingListController = new ShoppingListController(shoppingListService);

    const server = http.createServer((req, res) => {
      routes(req, res, shoppingListController);
    });

    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    server.on('error', (error) => {
      console.error('Server error:', error);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();