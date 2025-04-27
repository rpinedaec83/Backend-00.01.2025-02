class ShoppingListController {
  constructor(shoppingListService) {
    this.shoppingListService = shoppingListService;
  }

  async createItem(req, res) {
    const { nombre, descripcion } = JSON.parse(req.body);
    try {
      const newItem = await this.shoppingListService.createItem(nombre, descripcion);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newItem));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  async getPendingItems(req, res) {
    try {
      const pendingItems = await this.shoppingListService.getPendingItems();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(pendingItems));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  async getCompletedItems(req, res) {
    try {
      const completedItems = await this.shoppingListService.getCompletedItems();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(completedItems));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  async completeItem(req, res) {
    try {
      const id = req.url.split('/').pop();
      console.log('Attempting to complete item with ID:', id);
      const result = await this.shoppingListService.completeItem(id);
      console.log('Result from service:', result);
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Item marked as completed' }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Item not found' }));
      }
    } catch (error) {
      console.error('Error in completeItem:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
}

module.exports = ShoppingListController;