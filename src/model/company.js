const mongoose = require('../database')

// Create a model
const CompanyShema = new mongoose.Schema({
    cvm:{
        type: String,
        required: true,
        unique: true
    },

    corporate_name:{
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },

    bmf_share:[{
        type: String,
        uppercase: true,
        default: null
    }],

    meta_data:[{
        year:{
            type: String,
            require:true
        },
        trim:{
            type: String,
            require: true
        },
        url:{
            type: String,
            require: true
        }
    }],
    createAt:{
        type: Date,
        default: Date.now
    }
})

const Company  = mongoose.model('Company', CompanyShema)

// Input datas in model create, use the Mongo compass for to view the the datas
const company = Company.create({
    cvm:'123456',
    corporate_name:'Ambev',
    bmf_share: ['abev3'],
    meta_data:[{
        year: '2020',
        trim: '1',
        url: 'www.google.com.br'
    }]
})