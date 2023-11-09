import mongoose, { model } from "mongoose";

export default function () {
    mongoose.connect("mongodb://localhost:27017/EarthTrack-Assignment-Main").then(() => {
        console.log('MongoDB connection established');
    }).catch((error) =>{
        console.log(error);
    })
}