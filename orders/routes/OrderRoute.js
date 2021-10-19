const express = require("express");

const router = express.Router();



const {
    Create
  
} = require("../controllers/OrderController")





router
    .route("/")
      

router
    .route("/:id")
        .post(Create)
     


module.exports = router;