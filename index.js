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

request('https://whattomine.com/asic.json?utf8=%E2%9C%93&scryptf=true&factor%5Bscrypt_hash_rate%5D=504.0&factor%5Bscrypt_power%5D=800.0&factor%5Bcost%5D=0.055&sort=Profit&volume=0&revenue=current&factor%5Bexchanges%5D%5B%5D=&factor%5Bexchanges%5D%5B%5D=abucoins&factor%5Bexchanges%5D%5B%5D=bitfinex&factor%5Bexchanges%5D%5B%5D=bittrex&factor%5Bexchanges%5D%5B%5D=bleutrade&factor%5Bexchanges%5D%5B%5D=cryptopia&factor%5Bexchanges%5D%5B%5D=hitbtc&factor%5Bexchanges%5D%5B%5D=poloniex&factor%5Bexchanges%5D%5B%5D=yobit&dataset=Main&commit=Calculate', console.log)

app.listen(process.env.PORT || 8000);