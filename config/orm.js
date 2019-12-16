var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
    insertOne: function(tableInput, colInput, valOfCol){
        let queryString = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(queryString, [tableInput, colInput, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
    updateOne: function(tableInput, colInput, valInput, valOfCol){
        let queryString = "UPDATE ?? SET ?? = ?? WHERE id = ??;";
        connection.query(queryString, [tableInput, colInput, valInput, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
};


module.exports = orm;
