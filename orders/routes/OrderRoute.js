const express = require("express");

const router = express.Router();



const {
    Create,
    Get,
    GetOrdersByCostumerId,
    GetOrderById,
    Update,
    Delete,
    ChangeStatus
  
} = require("../controllers/OrderController")





router
    .route("/")
        .get(Get)
        .post(Create)
      

router
    .route("/costumer/:id")
        .get(GetOrdersByCostumerId)
     
router
    .route("/:id")
        .get(GetOrderById)
        .put(Update)
        .delete(Delete)
router
    .route("/status/:id")
        .put(ChangeStatus)

module.exports = router;