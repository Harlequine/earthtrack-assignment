import Joi from "joi";

const PRODCUT_NAME_REGEX =/^[a-zA-Z0-9]+(?:[ ][a-zA-Z0-9]+)*$/;
const DESCRIPTION_REGEX = /^(?!.*\s$)(?!.*\s\s)[\s\S]+$/;


const productSchema = Joi.object({
    productName: Joi.string().min(3).max(20).pattern(PRODCUT_NAME_REGEX, 'productName').required().messages({
        "string.max":"Product Name should not exceed 20 characters.",
        "string.min": "Product Name should have at least 3 characters.",
        "string.pattern.name": "Product Name should not include any special character and/or trailing white spaces.",
        "string.empty": "Product Name is required."
    }),
    description: Joi.string().max(200).pattern(DESCRIPTION_REGEX, 'description').required().messages({
        "string.max":"Description should not exceed 200 characters.",
        "string.pattern.name": "Description should not include trailing white spaces.",
        "string.empty": "Description is required."
    }),
    category: Joi.string().valid(
        "accessories",
        "toolbox",
        "beverages"
    ).required().messages({
        "string.empty": "Category is required.",
        "any.only": "Category should be one of the following: accessories, toolbox and beverages."
    }),
    price: Joi.number().min(1).required().messages({
        "string.min": "Price should not be below 1.",
        "string.empty": "Price is required.",
        "number.base": "Price must be a number."
    }),
    quantity: Joi.number().integer().min(1).required().messages({
        "string.min": "Quantity should not be below 1.",
        "string.empty": "Quantity is required.",
        "number.base": "Quantity must be a number."
    }),
})

const updateProductValidator = (data) => {
    const isUpdate = Object.keys(data).length < Object.keys(productSchema.describe().keys).length;
    const schemaKeys = Object.keys(productSchema.describe().keys);
    const dataKeys = Object.keys(data);

    const commonKeys = schemaKeys.filter((key) => dataKeys.includes(key));

    const partialSchema = Joi.object(
        Object.fromEntries(
            commonKeys.map((key) => [
                key, productSchema.extract(key)
            ])
        )
    ).prefs({ convert: false }).unknown(false);

    const validationSchema = isUpdate ? partialSchema : productSchema;

    return validationSchema.validate(data, { abortEarly: false });
};

export default updateProductValidator;