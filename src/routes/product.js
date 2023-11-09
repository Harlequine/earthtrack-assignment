import express from "express";
import productController from "../controller/product.js";
import upload from "../middleware/upload.js";

const router = express.Router();
router.post("/product/add",productController.addProduct);
// router.post("/product/add", productController.addProduct);
router.get("/product/get/:search/:page", productController.fetchProducts);
router.post("/product/edit/:name", productController.editProduct)
router.post("/product/delete/:name", productController.deleteProduct)


export default router;