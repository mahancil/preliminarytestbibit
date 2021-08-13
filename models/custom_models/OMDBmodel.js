var mysql = require('mysql');
var model = require('../index');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : '',
    database : 'PreliminaryTest'
});

exports.searchMovieLog = async function (params) {
    connection.connect();
    
    connection.query('INSERT INTO PreliminaryTest.log_table(req_url, api_key, keyword, page, movie_id, created_date)VALUES(?, ?, ?, ?, ?, current_timestamp());',[params.req_url, params.api_key, params.keyword, params.page, params.movie_id], function (error, results, fields) {
        if (error)
        {
            console.log(error)
        }
        else
        {
            console.log(results.insertId)
        }
    })

    connection.end();
}

exports.searchMovieLogPostgre = async function (params) {
    insert_log = await model.sequelize.query("INSERT INTO log_table(req_url, api_key, keyword, page, movie_id, created_date)VALUES(?, ?, ?, ?, ?, now()) RETURNING log_id;", {
        replacements:[params.req_url, params.api_key, params.keyword, params.page, params.movie_id],
        type: model.sequelize.QueryTypes.SELECT,
        quoteIdentifiers: true})

        return {menu_data:insert_log}
}