const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const Costumer = require("../../costumers/models/CostumerModel")
var ObjectID = require("bson-objectid");


/*     POST :: http://localhost:5000/orders
*/

exports.Create = async (req, res) => {
    const { CostumerId, Quantity, Price, Status, AddressLine, City, Country, CityCode, ImageUrl, Name, CreatedAt, UpdatedAt } = req.body
    const _id = ObjectID();

    

    try {


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
                _id,
                ImageUrl,
                Name
            },
            CreatedAt,
            UpdatedAt
        })

        const product = await Product.create({
            _id,
            ImageUrl,
            Name
        })

        return res.json({
            data: order._id
        })



    } catch (error) {
        return res.json({
            message: error
        })

    }
}


/*     GET :: http://localhost:5000/orders
*/
exports.Get = async (req, res) => {
    try {
        const orders = await Order.find();

        return res.json({
            data: orders
        })

    } catch (error) {
        return res.json({
            data: error
        })

    }

}



/*     GET :: http://localhost:5000/orders/costumer/:id
*/
exports.GetOrdersByCostumerId = async (req, res) => {
    try {
        const costumerId = req.params.id;

        const orders = await Order.find({ CostumerId: costumerId });

        return res.json({
            data: orders
        })

    } catch (error) {
        return res.json({
            data: error
        })

    }

}


/*     GET :: http://localhost:5000/orders/:id
*/
exports.GetOrderById = async (req, res) => {
    try {

        const id = req.params.id;
        const order = await Order.findById(id);
        if (!order) {
            return res.json({
                message: "Order not found!"
            })
        } else {
            return res.json({
                data: order
            })
        }

    } catch (error) {
        return res.json({
            data: error
        })

    }
}


/*     PUT :: http://localhost:5000/orders/:id
*/
exports.Update = async (req, res) => {

    try {
        const id = req.params.id;


        const order = await Order.findByIdAndUpdate(id, req.body);
        order.UpdatedAt = Date.now();
        order.save();

        const  ImageUrl = req.body.ImageUrl;
        const Name = req.body.Name;

        const productId = order.Product._id;
      

        if(Name || ImageUrl) {
            const product = await Product.findByIdAndUpdate(productId, req.body);
            
        }
        
        if (!order) {
            return res.json({
                message:"Order not found"
            })
        } else {
            return res.json(true)
        }

    } catch (error) {
        return res.json({
            data:error
        });
    }
}


/*     DELETE :: http://localhost:5000/orders/:id
*/
exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;

        

        const order = await Order.findById(id);
        const productId = order.Product._id;

        const deletedOrder = await Order.findByIdAndDelete(id);

        const product = await Product.findByIdAndDelete(productId);

        
        

        if (!order) {
            return res.json(false)
        } else {
            return res.json(true)
        }

    } catch (error) {
        return res.json({
            data: error
        })

    }

}


/*     PUT :: http://localhost:5000/orders/status/:id
*/
exports.ChangeStatus = async (req, res) => {
    try {
        const id = req.params.id;


        let order = await Order.findByIdAndUpdate(id, { Status: req.body.Status }, { new: true })

        if (!order) {
            return res.json(false)
        } else {
            return res.json(true)
        }
    } catch (error) {
        return res.json(false)
    }
}
