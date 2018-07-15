/**
 * Created by Qin on 2017/8/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var router = express.Router();

var URL = require('url');

var mysql = require('mysql');

var sd = require('silly-datetime');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'XiaoFang'
});
connection.connect();

var sql = 'SELECT * FROM information';
var addSql = 'INSERT INTO information(wendu,shidu,date) VALUES(?,?,?)'


router.post('/add',urlencodedParser,function (req,res,next) {
    var wendu = req.body.wendu;
    var shidu = req.body.shidu;
    var time = sd.format(new Date(),"YYYY-MM-DD HH:mm");
    console.log("wendu:"+wendu+"shidu:"+shidu+"time:"+time);

    var addSqlParams = [wendu,shidu,time];

    connection.query(addSql,addSqlParams,function (err,result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
    });
    res.send(" post successfully!");
});

module.exports = router;

