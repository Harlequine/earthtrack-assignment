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
        message: 'Product(s) Not Found.',
    },
    PRODUCT_ERROR_VALIDATION: {
        status,
        statusCode: STATUS_CODE.VALIDATION_ERROR
    },
    //access error
    ERROR_UNAUTHORIZED_ACCESS:{
        status,
        statusCode: STATUS_CODE.UNAUTHORIZED,
        message: 'Unauthorized Access.',
    },
    ACCESS_ERROR_FORBIDDEN: {
        status,
        statusCode:STATUS_CODE.FORBIDDEN,
        message:'Forbidden From Accessing URL.'
    },
    //token error
    TOKEN_ERROR_INVALID: {
        status,
        statusCode:STATUS_CODE.FORBIDDEN,
        message:'Invalid Token.'
    },
    EXPIRED_ACCESS_TOKEN: {
        status,
        statusCode:STATUS_CODE.FORBIDDEN,
        message:'Access Token Expired. Please Log-in.'
    }
    
}

export default errorMessage