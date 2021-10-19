const Order = require("../models/OrderModel");
//const Costumer = require("../../costumers/models/CostumerModel");
var ObjectID = require("bson-objectid");


exports.Create = async (req, res) => {
    const { Quantity, Price, Status, AddressLine, City, Country, CityCode,  ImageUrl, Name, CreatedAt, UpdatedAt } = req.body
    const Id = ObjectID().toString();
    console.log(Id);
    const CostumerId = req.params.id;
    //try {

        const order = await Order.create({
            CostumerId,
            Quantity,
            Price,
            Status,
            Address: {
                AddressLine,
                City,
                Country,
                CityCode

            },
            Product: {
                Id,
                ImageUrl,
                Name
            },
            CreatedAt,
            UpdatedAt
        })

        return res.json({
            data: order._id
        })



    /*} catch (error) {
        return res.json({
            message : error
        })

    }*/
}


