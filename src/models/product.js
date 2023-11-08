import mongoose from "mongoose";

const Schema = mongoose.Schema

const product = new Schema({
    name: {
        type: "String",
        required: true,
        unique: true
    },
    description: {
        type: "String",
        required: true,
        maxLength: 300
    },
    price: {
        type: "number",
        required: true,
    },
    quantity: {
        type: "number",
        required: true,
    }
});

const model = mongoose.model('product', product);

export default model;