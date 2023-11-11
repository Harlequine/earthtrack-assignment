import mongoose from "mongoose";

import PRODUCT from "../models/product.js";

const createTestProduct = async() => {
    const ifEmpty = await PRODUCT.find();
    if (ifEmpty.length === 0) {
        const docs = [{
                productName: "Keyboard",
                description: "Device used for typing.",
                category: "accessories",
                price: 123,
                quantity: 123
            },{
                productName: "Beer",
                description: "alcoholic beverage",
                category: "beverages",
                price: 123,
                quantity: 123
            },{
                productName: "Hammer",
                description: "Tool for hammering nails",
                category: "toolbox",
                price: 123,
                quantity: 123
            }
        ];

        await PRODUCT.insertMany(docs);
    }
} 

export default createTestProduct;