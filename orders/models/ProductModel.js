const { default: ObjectID } = require("bson-objectid");
const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({

    _id: {
        type: ObjectID,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    }




})


module.exports = mongoose.model("Product", ProductSchema);
