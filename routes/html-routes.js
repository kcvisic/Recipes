var path = require("path");

module.exports = function(app){

    app.get('/', function(req, res){
    	res.sendFile(path.join(__dirname, "../public/indexRecipe.html") );
    });

    app.get('/page2', function(req, res){
    	res.sendFile(path.join(__dirname, "../public/indexPage2.html"));
    });

    app.get('/page3', function(req, res){
    	res.sendFile(path.join(__dirname, "../public/indexPage3.html"));
    });

};
