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

        // Create array that holds 'index' and 'diff from newFriend'
        var scoreDiffs = [];
        for (var j=0; j < friends.length; j++) {
            var diff = 0;
            for (var k=0; k < friends[j].scores.length; k++) {
                diff += Math.abs(friends[j].scores[k] - newFriend.scores[k]);
            };

            var scoreDiff = {
                index: j,
                diff: diff
            };
            scoreDiffs.push(scoreDiff);
        };




        // Add new friend to array
        friends.push(newFriend);

        var match = {
            name: "Testing",
            photo: 'https://static.highsnobiety.com/wp-content/uploads/2018/04/18123341/kanye-west-creativity-guide-011-480x320.jpg',
            scores: [3,3,3,3,3,3,3,3,3,3]
        };
        // Send back the match
        return res.json(match);
    });
};

module.exports = apiRoutes;
