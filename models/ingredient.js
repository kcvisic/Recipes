module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
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

  Ingredient.associate = function(models){
    Ingredient.belongsTo(models.Recipe,{
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredient;
};
