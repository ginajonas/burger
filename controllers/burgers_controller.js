const express = require("express")

let router = express.Router()
let burger = require("../models/burger")

router.get("/", function(req, res){
    res.redirect("/burgers")
})

router.get("/burgers", function(req, res){
    burger.all(function(burgerData){
        res.render("index", {burgers:burgerData})
    })
})

router.post("/burgers", function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/burgers")
    })
})

router.put("/burgers/:id", function(req, res){
    burger.devour(req.params.id, function(result){
        res.sendStatus(200)
    })
})

module.exports = router