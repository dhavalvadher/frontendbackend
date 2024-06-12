const mongoose = require("mongoose")

const attributiesSchema =new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
            trim: true,
            unique: true
        },
        value: {
            type: String,
            trim: true,
            required: true
        }, 
        stock: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const varientSchems =new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: "Products",
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        attributes: [attributiesSchema]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Varients = mongoose.model("Varients", varientSchems)

module.exports = Varients;