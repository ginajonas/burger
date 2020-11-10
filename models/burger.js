const orm = require('../config/orm')

const Burger = {
    all: function(cb){
        orm.selectAll("burgers", cb)
    },
    create: function(burger_name, cb){
        orm.insertOne("burgers", {burger_name: burger_name}, cb)
    },
    devour: function(burger_id, cb){
        let condition = `id = ${burger_id}`
        orm.updateOne("burgers", {devoured: true}, condition, cb)
    },
    delete: function(burger_id, cb){
        let condition = `id = ${burger_id}`
        orm.deleteOne("burgers", condition, cb)
    }
}


module.exports = Burger












