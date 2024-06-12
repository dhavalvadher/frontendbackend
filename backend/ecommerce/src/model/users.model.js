const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const Users = mongoose.model("Users", productSchema);

module.exports = Users;


