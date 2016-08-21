module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        var reqDate = new Date().toString();
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + reqDate);
        next();
    }
};

