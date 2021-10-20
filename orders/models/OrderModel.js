const { default: ObjectID } = require("bson-objectid");
const mongoose = require("mongoose");



const OrderSchema = new mongoose.Schema({
    CostumerId: [{
        type: String,
      

    }],
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Address: {

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
            type: String,
            required: true
        }


    },
    Product: {
        _id: {
            type: ObjectID,
            
        },
        ImageUrl: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        }
    },
    CreatedAt: {
        type: String,
        required: true
    },
    UpdatedAt: {
        type: String,
        required: true
    }
})




module.exports = mongoose.model("Order", OrderSchema);
