import productService from "../service/product.js";
import productValidator from "../utils/product-validation.js"
import updateProductValidator from "../utils/update-product-validation.js"

import ERROR_MESSAGES from "../constants/error-message.js"
import SUCESS_MESSAGES from '../constants/success-message.js'


const addProduct = async(req, res) => {
    try {
        const { error, value } = productValidator(req.body)
        console.log(value)
        if(error)
            return res.json({...ERROR_MESSAGES.PRODUCT_ERROR_VALIDATION, message: [...error.message.split(' .')]})

        await productService.addProduct(req.body);
        return res.json(SUCESS_MESSAGES.PRODUCT_SUCCESS_ADD);
    } catch (error) {
        console.log(error)
        if(error.message.split(' ')[0] === "E11000") return res.json(ERROR_MESSAGES.PRODUCT_ERROR_TAKEN);
        return res.json(ERROR_MESSAGES.GENERAL_ERROR_REQUEST);
    }
}

const fetchProducts = async(req, res) => {
    try {
        const { search, page } = req.params
        const data = await productService.fetchProducts(search, page);
        if(data.length === 0) return res.json(ERROR_MESSAGES.PRODUCT_ERROR_NOT_FOUND);

        return res.json({...SUCESS_MESSAGES.PRODUCT_SUCCESS_FETCH_LIST,data:data});
    } catch (error) {
        console.log(error)
        return res.json(ERROR_MESSAGES.GENERAL_ERROR_REQUEST);
    }
}

const editProduct = async(req, res) => {
    try {
        const { name } = req.params;

        const { error, value } = updateProductValidator(req.body)
        if(error)
            return res.json({...ERROR_MESSAGES.PRODUCT_ERROR_VALIDATION, message: [...error.message.split(' .')]})

        const data = await productService.editProduct(value,name);

        if(!data) return res.json(ERROR_MESSAGES.PRODUCT_ERROR_NOT_FOUND);

        return res.json({...SUCESS_MESSAGES.PRODUCT_SUCCESS_UPDATED, data:data})
    } catch (error) {
        return res.json(ERROR_MESSAGES.GENERAL_ERROR_REQUEST);
    }
}

const deleteProduct = async(req,res) => {
    try {
        const { name } = req.params;

        const data = await productService.deleteProduct(name);
        if (!data)
            return res.json(ERROR_MESSAGES.PRODUCT_ERROR_NOT_FOUND);

        return res.json(SUCESS_MESSAGES.PRODUCT_SUCCESS_DELETED);
    } catch (error) {
        return res.json(ERROR_MESSAGES.GENERAL_ERROR_REQUEST);
    }
}

export default{
    addProduct,
    fetchProducts,
    editProduct,
    deleteProduct
}

