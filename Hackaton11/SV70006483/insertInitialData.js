const mongoose = require('mongoose');
const {
  User,
  Employee,
  Attendance,
  Supplier,
  Material,
  Purchase,
  Production,
  Payment
} = require('./schema');

const mongoURI = 'mongodb+srv://root:SYGwo6HKnWQRLsC2@cluster0.jo4ikgi.mongodb.net/SV70006483?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    return insertInitialData();
  })
  .then(() => {
    console.log('Initial data inserted successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    mongoose.disconnect();
  });

async function insertInitialData() {
  try {
    // Insert Users
    const user1 = await User.create({
      username: 'dhayroactualizado',
      password: 'secreto123',
      email: 'juan@example.com',
      role: 'gerente',
      isActive: false
    });

    const user2 = await User.create({
      username: 'dhayrokong',
      password: 'secreto123',
      email: 'dhayrokong@example.com',
      role: 'empleado',
      isActive: true
    });

    // Insert Employee
    const employee = await Employee.create({
      user: user1._id,
      position: 'Analista',
      salary: 4000.00,
      firstName: 'Carlos',
      lastName: 'Gómez',
      dni: '12345678',
      createdBy: user1._id,
      updatedBy: user1._id,
      updatedAt: new Date('2025-04-13T07:05:08'),
      isActive: false
    });

    // Insert Attendance
    await Attendance.create({
      employee: employee._id,
      date: new Date('2025-04-13'),
      entryTime: new Date('2025-04-13T08:00:00'),
      exitTime: new Date('2025-04-13T17:00:00'),
      observations: 'Asistencia completa',
      isActive: true
    });

    // Insert Supplier
    const supplier = await Supplier.create({
      name: 'Proveedor Actualizado',
      ruc: '10987654321',
      phone: '912345678',
      createdBy: user1._id,
      updatedBy: user1._id,
      updatedAt: new Date('2025-04-13T07:10:52'),
      isActive: false
    });

    // Insert Material
    const material = await Material.create({
          name: 'Madera de roble',
          unit: 'm²',
          quantity: 100.00,
          type: 'materia',
          createdBy: user1._id,
          isActive: true
        });

        // Insert Production
        await Production.create({
          type: 'Producto Final',
          name: 'Armario de roble',
          totalQuantity: 10.00,
          details: [{
            material: material._id,
            unit: 'm²',
            quantity: 50.00
          }],
          createdBy: user1._id,
          updatedBy: user1._id,
          updatedAt: new Date('2025-04-13T07:17:31'),
          isActive: false
        });

        // Insert Purchase
        await Purchase.create({
          date: new Date('2025-04-13'),
          supplier: supplier._id,
          totalAmount: 5000.00,
          details: [{
            material: material._id,
            unit: 'm²',
            quantity: 100,
            amount: 5000.00
          }],
          createdBy: user1._id,
          isActive: true
        });

    // Insert Payment
    await Payment.create({
      employee: employee._id,
      paymentDate: new Date('2025-04-15'),
      amount: 1600.00,
      description: 'Pago de salario ajustado',
      isActive: false
    });

  } catch (error) {
    console.error('Error inserting initial data:', error);
    throw error; // Re-throw the error to be caught in the main promise chain
  }
}