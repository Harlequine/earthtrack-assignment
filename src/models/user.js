import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema ({
    username: {
        type: "String",
        required: true,
        index: { unique: true }
    },
    email: {
        type: "String",
        required: true,
        index: { unique: true }
    },
    roleID: {
        type: 'Number',
    }
});

const model = mongoose.model('user', user);

export default model;

