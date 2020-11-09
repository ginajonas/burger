const connection = require('./connection.js')

// ORM example
const orm = {
  selectAll: function(table, cb){
    return connection.query(`
      SELECT * FROM ${table}
    `, function(err, result){
      if (err) throw err
      cb(result)
    })
  },
  insertOne: function(table, vals, cb) {
    return connection.query(`
      INSERT INTO ${table}
      SET ?
    `, vals,  function(err, result){
      if (err) throw err
      cb(result)
    });
  },
  updateOne: function(table, vals, condition, cb) {
    return connection.query(`
      UPDATE ${table}
      SET ?
      WHERE ${condition}
    `, vals, function(err, result){
      if (err) throw err
      cb(result)
    });
  }
}

module.exports = orm