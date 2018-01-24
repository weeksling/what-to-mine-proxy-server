var express = require('express'),
request = require('request');

var app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('/asic.json', function(req, res) {

    console.log("https://whattomine.com/asic.json" + req.url.substr(1)) 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    req.pipe(request("https://whattomine.com/asic.json" + req.url.substr(1))).pipe(res);
});

app.listen(process.env.PORT || 8000);