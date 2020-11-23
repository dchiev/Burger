var connection = require("./connection.js");

var orm = {
    selectWhere: function(tableInput,colToSearch,valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString,[tableInput,colToSearch,valOfCol], function (err,result){
            if (err) throw err;
            console.log(result);
        });

    },
    insertOne: function(whatToSelect,table,orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString,[whatToSelect,table,orderCol], function (err,result){
            if (err) throw err;
            console.log(result);
        });

        
    },
    updateOne: function(tableInput,colToSearch,valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString,[tableInput,colToSearch,valOfCol], function (err,result){
            if (err) throw err;
            console.log(result);
        });

    }
}






module.exports = orm;
