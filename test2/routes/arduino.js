/**
 * Created by Qin on 2017/8/14.
 */
var express = require("express");
var temp = express.Router();

temp.post('/temp',function (req,res) {
    var json = req.body;
    console.log("温度" + json.temp);
    console.log("湿度" + json.humid);

    res.send(/*"<p>温度:"+json.temp+"<p>"+"<p>湿度:"+json.humid+"<p>"+*/"<p>OK<p>");

});
temp.get('/temp',function (req,res) {

    res.send("<h1>这是一个测试<h1>"+"<h2>温度:<h2>"+"<h3>湿度:<h3>"
    +"<h4>OK<h4>");
})
module.exports = temp;