import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import DB_CONNECT from './src/config/db-connect.js'

const app = express();
app.use(cors({origin:true}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});

DB_CONNECT();
