const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/company',  { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, 
useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
