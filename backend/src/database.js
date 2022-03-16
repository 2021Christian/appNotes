const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_NOTES)// MongoDbAtlas

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected!!')
})