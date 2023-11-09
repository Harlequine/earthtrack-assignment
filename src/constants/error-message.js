import STATUS from './status.js'
import STATUS_CODE from './status-code.js'
const status = STATUS.FAILED;

const errorMessage = {
    // General Error Messages
    GENERAL_ERROR_REQUEST: {
        status,
        statusCode: STATUS_CODE.FORBIDDEN,
        message: 'Sorry Your Request Could Not Be Processed.',
    },
    // Product Error Messages
    PRODUCT_ERROR_ADD: {
        status,
        statusCode: STATUS_CODE.FAILED,
        message: 'Failed to Add Product.',
    },
    PRODUCT_ERROR_TAKEN: {
        status,
        statusCode: STATUS_CODE.CONFLICT,
        message: 'Product Name Already Exist.',
    },
    PRODUCT_ERROR_NOT_FOUND: {
        status,
        statusCode: STATUS_CODE.NOT_FOUND,
        message: 'Product Not Found.',
    },
    PRODUCT_ERROR_VALIDATION: {
        status,
        statusCode: STATUS_CODE.VALIDATION_ERROR
    },
    
}

export default errorMessage