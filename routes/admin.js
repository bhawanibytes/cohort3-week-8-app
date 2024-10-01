const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put("/course", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}