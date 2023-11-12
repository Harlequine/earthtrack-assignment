import express from "express";
import productController from "../controller/product.js";
import handleAccessToken from "../middleware/handle-access-token.js";

const router = express.Router();
router.post("/product/add",handleAccessToken,productController.addProduct);
router.get("/product/get",handleAccessToken, productController.fetchProducts);
router.post("/product/edit", handleAccessToken,productController.editProduct)
router.post("/product/delete",handleAccessToken, productController.deleteProduct)


export default router;