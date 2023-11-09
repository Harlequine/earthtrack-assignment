import mongoose from "mongoose";

const Schema = mongoose.Schema

const product = new Schema({
    productName: {
        type: "String",
        required: true,
        index: { unique: true }
    },
    description: {
        type: "String",
        required: true,
        maxLength: 300
    },
    category: {
        type: "String",
        required: true,
        enum: ["toolbox", "beverages", "accessories"]
    },
    price: {
        type: "number",
        required: true,
    },
    quantity: {
        type: "number",
        required: true,
    },
    productImage:{
        type: "String"
    },
    suffixes:{
        type:["String"]
    }},{
        autoIndex:true
    });

    product.index({
        "productName": "text",
        "description": "text",
    })

const model = mongoose.model('product', product);

export default model;