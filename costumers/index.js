// required packages
const express = require("express");
const dotenv = require("dotenv");




// load vars
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;


const app = express();

app.use("/", (req, res) => {
    return res.status(200).json({"msg":"Hello from costumers"});

})

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})
