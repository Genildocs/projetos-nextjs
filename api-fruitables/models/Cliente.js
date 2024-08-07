const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cart:[
        {
            type: String,
            default: false
        }
    ],
    cpf:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Cliente', clienteSchema)