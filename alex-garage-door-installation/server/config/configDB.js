const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;