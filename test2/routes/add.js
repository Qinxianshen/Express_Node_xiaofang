/**
 * Created by Qin on 2017/8/15.
 */
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
var addSql = 'INSERT INTO document(id,name,sex) VALUES(?,?,?)'

router.get('/',function (req,res,next) {
   var params = URL.parse(req.url,true).query;
   var addSqlParams = [params.id,params.name,params.sex];

   connection.query(addSql,addSqlParams,function (err,result) {
       if(err){
           console.log('[INSERT ERROR] - ',err.message);
           return;
       }
   });

   connection.query(sql,function (err,result) {
       if(err){
           console.log('[SELECT ERROR] - ',err.message);
           return;
       }
       console.log(params.id);
       res.send(result);
   });
});

module.exports = router;