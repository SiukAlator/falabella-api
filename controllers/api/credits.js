var async = require('async');
var fs = require('fs');

exports.evaluate = function (req, res, falabella) {
    async.waterfall(
        [
            function (callback) {
                return setData(callback);
            },
            function (resultado, callback) {
                res.send(resultado);
            }
        ],
        function (err, status) {
            res.send({ "code": "500", "message": "Internal Error", "str": err });
        }
    );

    function setData(cb) {

        let filePath = __dirname + '/../../data/data.txt';
        let body = req.body;

        let data = '\n-----Data-----\n';
        data += 'rut: ' + body.rut +'\n';
        data += 'email: ' + body.email +'\n';
        data += 'phone: ' + body.phone +'\n';
        data += 'renta: ' + body.renta +'\n';
        data += 'x-user-browser: ' + body["x-user-browser"] +'\n';
        data += 'x-user-os: ' + body["x-user-os"] +'\n';
    
        fs.appendFile(filePath, data, function(err) {
            let result;
            if (err) 
                result = falabella.constants.INTERNAL_ERROR;
            else
                result = falabella.constants.OK;
            return cb(null, result);
        });
    
        // let result = false;

        // return cb(null, result);
        
    }
}
