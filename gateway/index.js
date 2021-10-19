// required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const proxy = require("express-http-proxy");    // !!!!!
var http = require('http')


// load vars
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());


app.use("/orders", proxy("http://localhost:5001"));
app.use("/costumers", proxy("http://localhost:5002"));


app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})

