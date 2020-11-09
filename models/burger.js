const orm = require('../config/orm')

const Burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    create: function(burger_name, cb){
        orm.insertOne("burgers", {burger_name: burger_name}, function(res){
            cb(res)
        })
    },
    devour: function(burger_id, cb){
        let condition = `id = ${burger_id}`
        orm.updateOne("burgers", {devoured: true}, condition, function(res){
            cb(res)
        })
    }
}

module.exports = Burger












