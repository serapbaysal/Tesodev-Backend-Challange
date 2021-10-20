const { default: ObjectID } = require("bson-objectid");
const mongoose = require("mongoose");



const OrderSchema = new mongoose.Schema({
    CostumerId: [{
        type: ObjectID,
      

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
            type: Number,
            required: true
        }


    },
    Product: {
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
    },
    CreatedAt: {
        type: Date,
        required: true,
        default:Date.now()
    },
    UpdatedAt: {
        type: Date,
        required: true
    }
})




module.exports = mongoose.model("Order", OrderSchema);
