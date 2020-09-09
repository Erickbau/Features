const mongoose = require('mongoose')

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/noderest',  { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, 
=======
mongoose.connect('mongodb://localhost/company',  { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, 
>>>>>>> f3e1a74d67db92a27321b6d0b37a96b2094e2a0f
useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;