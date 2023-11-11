import jwt from "jsonwebtoken";

import ERROR_MESSAGE from "../constants/error-message.js"

const handleAccessToken = async(req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.json(ERROR_MESSAGE.ACCESS_ERROR_FORBIDDEN)
        }
        const token = authHeader.split(' ')[1];
        
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
            (error, decoded) => {
                if(error){
                    if(error.message === "jwt expired"){
                        return res.json(ERROR_MESSAGE.EXPIRED_ACCESS_TOKEN)
                    }
                    else{
                        return res.json(ERROR_MESSAGE.TOKEN_ERROR_INVALID)
                    }
                }

                const { roleId, username } = decoded;
                if(!username || !roleId){
                    return res.json(ERROR_MESSAGE.ERROR_UNAUTHORIZED_ACCESS);
                }

                req.payload = decoded
                next();
            })
    } catch (error) {
        return res.json(ERROR_MESSAGE.GENERAL_ERROR_REQUEST)
    }
}

export default handleAccessToken;