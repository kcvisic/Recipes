
var db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/recipes/", function(req, res) {
    db.Recipe.findAll({

      /**
      *  In order to include other models, which have foreign key constraints of
      * `RecipeId` in their tables, use the include parameter. This will automatically
      * do sql joins and create the object with all of the other models as
      * properties or parameters on the returned data object.
      * The Category model, is special, because we have a
      * `RecipeCategories` table in the DB, which is automatically created by Sequelize.
      *
      * But, since `RecipeCategories` is not really a model, but an intermediate table, what
      * we really need to include is the Categoy model. The `Categories` for the `Recipce` will be
      * found by querying the `RecipeCategories` table, and looking up the actual
      * Category by the `CategoryId` foreign key in `RecipeCategories`.
      */
      include: [db.Ingredient, db.Direction, db.Category]
    }).then(function(recipe) {
      res.json(recipe);
    });
  });

  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Ingredient, db.Direction, db.Category]

    }).then(function(data){
       res.json(dbIngredient);
    });
  });

  app.get("/api/categories/", function(req, res) {
    db.Category.findAll({
      include: [{
        model: db.Recipe,
        include: [
          db.Ingredient,
          db.Direction,
        ]
      }]
    }).then(function(category) {
      res.json(category);
    });
  });

  app.post('/api/recipe/add/', function(req, res){
   console.log(req.body);

    db.Recipe.create({
      name: req.body.recipeName
    }).then(function(data){

      var id_recipe = data.get('id');

      var len = req.body.ingredientName.length;
      if(len >= 2){
        for(var i=0; i<len-1; i++){
          db.Ingredient.create({
            name: req.body.ingredientName[i],
            RecipeId: id_recipe
          })
        }
      } // end if(len >=2)

      db.Ingredient.create({
        name: req.body.ingredientName[len-1],
        RecipeId: id_recipe
      }).then(function(data2){

        db.recipecategory.create({
          RecipeId: id_recipe,
          CategoryId: req.body.categoryId
        });

      });


      res.json(data);
    });


  });

};
