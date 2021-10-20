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

const order = require("./routes/OrderRoute")


app.use("/", order);

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})
