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

    }).then(function(data) {
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

  app.post('/api/entry', function(req, res) {
    console.log(req.body);
    var ingredients = [];
    var directions = [];

    // create all ingredients
    for (var i = 0; i < req.body.ingredients.length; i++) {
      var ingredient = {
        name: req.body.ingredients[i],
      }
      ingredients.push(ingredient);
    }

    // create directions
    for (i = 0; i < req.body.directions.length; i++) {
      var direction = {
        stepDirection: req.body.directions[i],
        stepNum: 1 + i,
      }
      directions.push(direction);
    }

    console.log(`Ingredients: ${JSON.stringify(ingredients)}`);
    console.log(`Directions:  ${JSON.stringify(directions)}`);
    console.log(`Recipe Name: ${req.body.recipeName}`);
    r = null;
    db.sequelize.transaction(function(t) {

      // create the recipe
      return db.Recipe.create({
          name: req.body.recipeName,
          Ingredients: ingredients,
          Directions: directions,
          // Categories: [category],
        }, {
          include: [
            db.Ingredient,
            db.Direction,
            // db.Category,
          ],
          transaction: t
        })
        .then(function(recipe) {
          r = recipe;
          return db.Category.findOne({
            where: {name: req.body.category}
          }, {
            transaction: t
          })
        })
        .then(function(category) {
          console.log("Found Category");

          return r.setCategories(category, {
            transaction: t
          });
        })
    })
    .then(function(result){
      console.log("Returning the response");
      res.sendStatus(200);
    })
  });
};
