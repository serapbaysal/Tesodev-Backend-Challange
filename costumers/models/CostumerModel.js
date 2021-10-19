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
        type: String,
        required: true
    },
    UpdatedAt: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model("Costumer", CostumerSchema);
