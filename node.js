var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Expose-Headers", "*");
    next();
});

app.get('/getdata', function(req, res) {
    console.log(1);
    res.send({id:"1", name: "tiantian"});
});


const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

var apiRoutes = express.Router();
apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
})
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
})
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
})
app.use('/api', apiRoutes)

app.listen(3000);
console.log('Listening on port 3000...');