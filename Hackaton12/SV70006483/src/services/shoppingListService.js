const ShoppingItem = require('../models/ShoppingItem');
const { ObjectId } = require('mongodb');

class ShoppingListService {
  constructor(db) {
    this.itemModel = db.collection('shopping_items'); 
  }

  async createItem(nombre, descripcion) {
    const newItem = new ShoppingItem(nombre, descripcion);
    const result = await this.itemModel.insertOne(newItem);
    return { id: result.insertedId, ...newItem };
  }

  async getPendingItems() {
    return await this.itemModel.find({ esCompletado: false }).toArray();
  }

  async getCompletedItems() {
    return await this.itemModel.find({ esCompletado: true }).toArray();
  }

  async completeItem(id) {
    console.log('Service: Attempting to complete item with ID:', id);
    try {
      const result = await this.itemModel.updateOne(
        { _id: new ObjectId(id) },
        { $set: { esCompletado: true } }
      );
      console.log('Service: Result of update:', result);
      if (result.modifiedCount === 1) {
        return await this.itemModel.findOne({ _id: new ObjectId(id) });
      } else {
        return null;
      }
    } catch (error) {
      console.error('Service: Error in completeItem:', error);
      throw error;
    }
  }
}

module.exports = ShoppingListService;