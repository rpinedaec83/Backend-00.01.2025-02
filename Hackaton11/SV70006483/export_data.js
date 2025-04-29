const mongoose = require('mongoose');
const fs = require('fs');
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
  .then(async () => {
    console.log('Connected to MongoDB');

    const collections = [
      { name: 'users', model: User },
      { name: 'employees', model: Employee },
      { name: 'attendances', model: Attendance },
      { name: 'suppliers', model: Supplier },
      { name: 'materials', model: Material },
      { name: 'purchases', model: Purchase },
      { name: 'productions', model: Production },
      { name: 'payments', model: Payment }
    ];

    for (const collection of collections) {
      const data = await collection.model.find();
      fs.writeFileSync(`${collection.name}.json`, JSON.stringify(data, null, 2));
      console.log(`Exported ${collection.name}`);
    }

    console.log('All data exported successfully');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    mongoose.disconnect();
  });