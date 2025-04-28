const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  role: { type: String, enum: ['admin', 'empleado', 'gerente'] },
  isActive: { type: Boolean, default: true }
});

const employeeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  position: String,
  salary: Number,
  firstName: String,
  lastName: String,
  dni: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: Date,
  entryTime: Date,
  exitTime: Date,
  observations: String,
  isActive: { type: Boolean, default: true }
});

const supplierSchema = new mongoose.Schema({
  name: String,
  ruc: String,
  phone: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});

const materialSchema = new mongoose.Schema({
  name: String,
  unit: String,
  quantity: Number,
  type: { type: String, enum: ['insumo', 'materia'] },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});

const purchaseSchema = new mongoose.Schema({
  date: Date,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  totalAmount: Number,
  details: [{
    material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
    unit: String,
    quantity: Number,
    amount: Number
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});

const productionSchema = new mongoose.Schema({
  type: String,
  name: String,
  totalQuantity: Number,
  details: [{
    material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
    unit: String,
    quantity: Number
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});

const paymentSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  paymentDate: Date,
  amount: Number,
  description: String,
  isActive: { type: Boolean, default: true }
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Employee: mongoose.model('Employee', employeeSchema),
  Attendance: mongoose.model('Attendance', attendanceSchema),
  Supplier: mongoose.model('Supplier', supplierSchema),
  Material: mongoose.model('Material', materialSchema),
  Purchase: mongoose.model('Purchase', purchaseSchema),
  Production: mongoose.model('Production', productionSchema),
  Payment: mongoose.model('Payment', paymentSchema)
};