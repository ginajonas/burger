/**
 * CONNECTION.JS
 * THIS FILE INITIATES THE CONNECTION TO MYSQL
 */

// Require mysql
const mysql = require('mysql2')
const util = require("util")

// Set up our connection information
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
})


connection.connect()

connection.query = util.promisify(connection.query)

module.exports = connection


