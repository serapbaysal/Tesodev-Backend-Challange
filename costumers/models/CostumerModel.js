const mongoose = require("mongoose");



const CostumerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true

    },
    Email: {
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


module.exports = mongoose.model("Costumer", CostumerSchema);
