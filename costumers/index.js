// required packages
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const cors = require("cors");



// load vars
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;


connectDB();

const app = express();
app.use(cors());
app.use(express.json())

const costumer = require("./routes/CostumerRoute")

/* app.use("/", (req, res) => {
    return res.status(200).json({"msg":"Hello from costumers"});

})  */

app.use("/", costumer);

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})
