import PRODUCT from '../models/product.js'
import upload from '../middleware/upload.js';

const addProduct = async(reqBody) => {
    try {
        await PRODUCT.create(reqBody);
    } catch (error) {
        throw error;
    }
}

const fetchProducts = async(search, page) => {
    try {
        const paginate = (page - 1) * 2;
        if(search !== ":search"){
            const data = await PRODUCT.find({
                $or: [
                    { productName: {$regex: search} },
                    { description: {$regex: search} }
                ]
            }).limit(2).skip(paginate);
            return data
        }
        else{
            const data = await PRODUCT.find().limit(2).skip(paginate);
            return data;
        }
    } catch (error) {
        throw error;
    }
}

const editProduct = async(reqBody,name) => {
    try {
        return await PRODUCT.findOneAndUpdate({productName:name},reqBody,{new:true});
    } catch (error) {
        throw error;
    }
    
}

const deleteProduct = async(name) => {
    try {
        return await PRODUCT.findOneAndDelete({productName:name})
    } catch (error) {
        throw error;
    }
}

export default{
    addProduct,
    fetchProducts,
    editProduct,
    deleteProduct
}