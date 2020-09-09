const mongoose = require('../database')

const UserSchema  = new mongoose.Schema({
    name:{
        type: String,
        require: true
    }, 
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require: true,
        select: false
    },
    createAt:{
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('User', UserSchema);

const user =  User.create({
    name:'eri1121ck',
    email:'eri212ck',
    password:'12121213456'                                
})






module.exports = User;