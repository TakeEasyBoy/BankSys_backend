var express = require('express');
var router = express.Router();
var token = require('../token/token.js')
    //payload
var payload = {
    "iss": "shijiyunhe", //发行者
    "name": "minghcao", //
    "admin": true
}

//发送的data数据结构
var data = {
    "code": 0, //错误码。成功返回0
    "msg": "", //错误描述
    "datas": {}, //返回的具体内容
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/**
 * 登陆
 */
router.post('/login', function(req, res) {
    console.log("test login =-===-=-=-=-=-=-=-=");
    console.log(req.query);
    data.datas = {}
    data.datas.username = req.query.username
    data.datas.password = req.query.password
    data.datas.token = token.createToken(payload, 120)
    data.datas.role = 'admin'
    res.send(data)
})
router.post('/testtoken', function(req, res) {
    console.log("test token");
    data.datas.token = token.createToken(payload, 120)
    res.send(data)
})

router.post('/sendtoken', function(req, res) {
    // console.log(req.headers['x-token']);
    //请求头中的token，
    console.log(req.headers);
    var getToken = req.headers['x-token']
    console.log("==============-----------------==========");
    console.log(token.checkToken(getToken));
    data.datas = {}
    data.datas.test = 'ok'
    data.datas.role = 'admin'
    res.send(data)
})

module.exports = router;