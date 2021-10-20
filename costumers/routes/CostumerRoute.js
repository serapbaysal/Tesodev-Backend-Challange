const express = require("express");

const router = express.Router();



const {
    Get,
    Create,
    GetById,
    Update,
    Delete
} = require("../controllers/CostumerController")





router
    .route("/")
        .get(Get)
        .post(Create)
        

router
    .route("/:id")
        .get(GetById)
        .delete(Delete)
        .put(Update)


module.exports = router;