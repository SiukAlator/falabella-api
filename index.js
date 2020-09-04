
var express = require("express");
var bodyParser = require("body-parser");
var env = require('node-env-file');
env(__dirname + '/.env');
var credits = require('./controllers/api/credits');
var app = express();
var falabella = {};
falabella.constants = require('./libs/constants');

var port = process.env.PORT || '4000';

var allowMethods = function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
}

var allowCrossTokenHeader = function(req, res, next){
    res.header("Access-Control-Allow-Methods", "token");
    return next();
}

var auth = function(req, res, next)
{
    
    /** En estado de pruebas, se genera token Dummy **/
    let dummyToken = "e817c8c863f6e39f1f77370305655551e4b5654d";
    if(req.headers.token === dummyToken)
    {
        return next();
    }
    else
    {
        res.send(falabella.constants.UNAUTHORIZED);
    }
}

var checkData = function(req, res, next)
{
    let body = req.body;
    if (typeof body.rut == 'undefined' || body.rut == '' ||
        typeof body.email == 'undefined' || body.email == '' ||
        typeof body.phone == 'undefined' || body.phone == '' ||
        typeof body.renta == 'undefined' || body.renta == '' ||
        typeof body["x-user-browser"] == 'undefined' || body["x-user-browser"] == '' ||
        typeof body["x-user-os"] == 'undefined' || body["x-user-os"] == '')
    {
        res.send(falabella.constants.BAD_REQUEST);
    }
    else
        return next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowMethods);
app.use(allowCrossTokenHeader);

app.post("/api/evaluate", auth, checkData, function(req, res, next){
    credits.evaluate(req, res, falabella);
});


app.listen(port, function(){
    console.log("Servidor escuchando en el puerto ", port);
})