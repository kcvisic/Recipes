module.exports = function(sequelize, DataTypes) {
  var Direction = sequelize.define("Direction", {
    stepNum: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
    	validate: {
    		isInt: true
    	}
    },
    stepDirection: {
    	type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
  );

  Direction.associate = function(models){
    Direction.belongsTo(models.Recipe,{
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Direction;
};
