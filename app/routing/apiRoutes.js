var friends = require('../data/friends');
var bodyParser = require('body-parser');

function apiRoutes(app) {
    app.get('/api/friends', function(req,res){
        return res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        friends.push(req.body);
        res.json(friends);
    });
};

module.exports = apiRoutes;
