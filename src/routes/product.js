import express from "express";
import productController from "../controller/product.js";
import handleAccessToken from "../middleware/handle-access-token.js";

const router = express.Router();
router.post("/product/add",handleAccessToken,productController.addProduct);
router.get("/product/get/:search/:page",handleAccessToken, productController.fetchProducts);
router.post("/product/edit/:name", handleAccessToken,productController.editProduct)
router.post("/product/delete/:name",handleAccessToken, productController.deleteProduct)


export default router;