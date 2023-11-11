import mongoose, { model } from "mongoose";

export default function () {
    mongoose.connect(process.env.DB_URI).then(() => {
        console.log("MongoDB connection established");
    }).catch((error) =>{
        console.log(error);
    })
}