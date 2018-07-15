var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile("/arduino/Tiaozhangbei/Node/test2/views/"+"index2.html");
    res.send("arduino 资讯网页");
});
router.get('/th',function (req,res) {
    var temp = req.query.t;
    var humid = req.query.h;

    if(temp != undefined && humid != undefined){
      console.log("温度： " + temp + ",湿度： " + humid);
      res.send("温度： " + temp + "℃，湿度："+humid+"％");
    }else {
      console.log("没收到资料");
    }
});

/*var server = app.listen(5438,function () {
   console.log("服务器5438开工了");
});*/

module.exports = router;
