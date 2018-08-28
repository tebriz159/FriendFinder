var friends = require('../data/friends');
var bodyParser = require('body-parser');

function apiRoutes(app) {
    app.get('/api/friends', function(req,res){
        return res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        // Create newFriend object
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        for (var i=0; i < req.body.scores.length; i++) {
            newFriend.scores[i] = parseInt(req.body.scores[i]);
        };

        var match = {
            name: 'Testing this app',
            photo: 'https://assets.nobelprize.org/images/einstein-12923-content-portrait-mobile-tiny.jpg',
            scores: [3,3,3,3,3,3,3,3,3,3]
        };


        // Add new friend to array
        friends.push(newFriend);

        // Send back the match
        return res.json(match);
    });
};

module.exports = apiRoutes;
