const mongoose = require("mongoose");


const AddressSchema = new mongoose.Schema({

    AddressLine: {
        type: String
    },
    City: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    CityCode: {
        type: Number,
        required: true
    }




})


module.exports = mongoose.model("Address", AddressSchema);
