var path = require("path");

module.exports = function(app){

    app.get('/entry', function(req, res){
    	res.sendFile(path.join(__dirname, "../public/recipe_entry.html") );
    });



};
