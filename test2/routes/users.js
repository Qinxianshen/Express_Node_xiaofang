var express = require('express');
var router = express.Router();

var URL = require('url');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'test'
});
connection.connect();

var sql = 'SELECT * FROM document';

/* GET users listing. */
router.get('/ArrayList', function(req, res, next) {
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        res.send(result);
    });
});
router.get('/id', function(req, res, next) {
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[0].id);
        res.send("id:"+result[0].id);
    });
});
router.get('/name', function(req, res, next) {
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[0].name);
        res.send("name:"+result[0].name);
    });
    router.get('/sex', function(req, res, next) {
        connection.query(sql,function (err,result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            console.log(result[0].sex);
            res.send("sex:"+result[0].sex);
        });
    });
});

module.exports = router;
