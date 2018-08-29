var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import files
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

app.use(express.static('app/public'));
apiRoutes(app);
htmlRoutes(app);

// Listener
app.listen(PORT, function(){
  console.log(`App listening on PORT ${PORT}`);
});