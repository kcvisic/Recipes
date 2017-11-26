module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1, 35]
    	}
    }
  },
  {
    timestamps: false
  }
  );

  Category.associate = function(models){
    Category.belongsToMany(models.Recipe, {
      through: "RecipeCategories"
    })
  }

  return Category;
};
