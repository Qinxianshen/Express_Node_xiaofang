/**
 * Created by Qin on 2017/8/16.
 *
 * Get：获取对应一项的时间 ：http://127.0.0.1:3200/find/SingleDate?id=1
 * GET：获取状态列表：http://127.0.0.1:3200/find/ArrayList
 * GET：获取某一项目的温度：http://127.0.0.1:3200/find/SingleWendu?id=0
 * GET：获取某一项目的湿度：http://127.0.0.1:3200/find/SingleShidu?id=0
 * GET：获取某一项的详细信息:http://127.0.0.1:3200/find/Single?id=0
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

var sql = 'SELECT * FROM information';

router.get('/ArrayList',function (req,res,next) {
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result);
        res.send(result);
    });

});

router.get('/Single',function (req,res,next) {
    var params = URL.parse(req.url,true).query;
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[params.id]);
        res.send(result[params.id]);
    });

});


router.get('/SingleWendu', function(req, res, next) {
    var params = URL.parse(req.url,true).query;
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[params.id].wendu.toString());
        res.send(result[params.id].wendu.toString());
    });

});

router.get('/SingleShidu', function(req, res, next) {
    var params = URL.parse(req.url,true).query;
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[params.id].shidu.toString());
        res.send(result[params.id].shidu.toString());
    });

});

router.get('/SingleDate', function(req, res, next) {
    var params = URL.parse(req.url,true).query;
    connection.query(sql,function (err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        console.log(result[params.id].date);
        res.send(result[params.id].date);
    });

});

module.exports = router;