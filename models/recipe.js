module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1, 100]
    	}
    }
  },
  {
    timestamps: false
  }
  );

  Recipe.associate = function(models){
    Recipe.hasMany(models.Ingredient, {
      onDelete: "cascade"
    });

    Recipe.hasMany(models.Direction, {
      onDelete: "cascade"
    });

    /**
    * Instead of manually creating the Recipe_Categories table to represent the
    * relationship between Recipes and Categories, use the sequelize `belongsToMany`,
    * method, and specify the `through` parameter. The through parameter is used
    * to declare the table that will represent the relationship. It should be
    * declared on both models, Recipe and Category. More information can be found
    * here http://docs.sequelizejs.com/manual/tutorial/associations.html#creating-elements-of-a-belongsto-has-many-or-hasone-association
    */
    Recipe.belongsToMany(models.Category, {
      through: "RecipeCategories",
    })
  };

  return Recipe;
};
