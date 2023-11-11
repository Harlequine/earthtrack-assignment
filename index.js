import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"

import DB_CONNECT from "./src/config/db-connect.js"
import PRODUCT_ROUTES from "./src/routes/product.js"
import CREATE_TEST_PRODUCT from "./src/config/create-test-products.js";

dotenv.config();
const app = express();
app.use(cors({origin:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/api", PRODUCT_ROUTES)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});

DB_CONNECT();
CREATE_TEST_PRODUCT();
