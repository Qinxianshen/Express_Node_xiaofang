/**
 * Created by Qin on 2017/8/31.
 *
 * 上传命令：http://127.0.0.1:3200/command/open?Command=open
 *获取最近的命令状态:http://127.0.0.1:3200/command/CommandTop
 */
var express = require('express');
var router = express.Router();

var URL = require('url');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'XiaoFang'
});

connection.connect();

var sql = 'SELECT * FROM switches';

var addSql = 'INSERT INTO switches(command) VALUES(?)';

router.get('/open',function (req,res,next) {

    var params = URL.parse(req.url,true).query;

    console.log("command:"+params.Command);

    var addSqlParams = [params.Command];

    connection.query(addSql,addSqlParams,function (err,result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        res.send(result);
    });

});
router.get('/CommandTop',function (req,res,next) {
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        var len = result.length;
        console.log(result[len-1].command);
        res.send(result[len-1].command);
    });

});

module.exports = router;

