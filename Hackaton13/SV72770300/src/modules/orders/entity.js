import mongoose from "../../config/db/index.js";

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    customer: { name: String, email: String, phone: String, address: String },
    products: { type: Array, default: [] },
    total: { type: Number, default: 0 }
});

const PurchaseOrdersModel = mongoose.model("PurcharsesOrder", OrdersSchema);

export default PurchaseOrdersModel;