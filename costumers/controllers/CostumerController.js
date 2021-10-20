const Costumer = require("../models/CostumerModel");
const Address = require("../models/AddressModel");


/*    POST :: http://localhost:5000/costumers
*/

exports.Create = async (req, res) => {
    const { Name, Email, UpdatedAt, CreatedAt, AddressLine, City, Country, CityCode } = req.body;

    try {
        const costumerExists = await Costumer.findOne({ Email });

        if (costumerExists) {
            return res.json({
                message: "This email is using!"
            })
        }
        else {
            const costumer = await Costumer.create({
                Name,
                Email,
                UpdatedAt,
                CreatedAt,
                Address:
                {
                    AddressLine,
                    City,
                    Country,
                    CityCode
                }

            })

            await Address.create({
                AddressLine,
                City,
                Country,
                CityCode

            })



            return res.json(
                {
                    data: costumer._id
                }
            )
        }


    } catch (error) {
        return res.json({
            success: false,
            data: error
        })

    }
}







/*     GET :: http://localhost:5000/costumers
*/
exports.Get = async (req, res) => {
    try {
        const costumers = await Costumer.find();
        return res.status(200).json({
            success: true,
            data: costumers
        })
    } catch (error) {

        return res.json({
            data: error
        })

    }

}

/*     GET :: http://localhost:5000/costumers/:id
*/

exports.GetById = async (req, res) => {

    try {
        const id = req.params.id;

        const costumer = await Costumer.findById(id);

        if (Validate(id)) {
            return res.status(200).json({
                data: costumer
            })
        } else {
            return res.json(false);
        }

    } catch (error) {
        return res.json({
            data: error
        })

    }

}


/*     PUT :: http://localhost:5000/costumers/:id
*/
exports.Update = async (req, res) => {
    try {
        const id = req.params.id;

        const costumer = await Costumer.findByIdAndUpdate(id, req.body);
        costumer.UpdatedAt = Date.now();
        costumer.save();

        if (!Validate(id)) {
            return res.json({
                success: false,
                message: "Costumer not exists!"
            })
        } else {
            return res.json(true)
        }

    } catch (error) {
        return res.json(false);
    }


}


/*     DELETE :: http://localhost:5000/costumers/:id
*/
exports.Delete = async (req, res) => {
    try {
        const costumer = await Costumer.findByIdAndDelete(req.params.id);
        if (!Validate(req.params.id)) {
            return res.json({
                success: false,
                message: "Costumer not exists!"
            })
        } else {
            return res.json(true);
        }
    } catch (error) {
        return res.json(false);

    }
}

async function Validate(id) {
    const costumerExist = await Costumer.exists({ id });

    if (!costumerExist) {
        return false;
    } else {
        return true;
    }
}
