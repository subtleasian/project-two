module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    UnpleasantScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    PleasantScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    OverallEmotionScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });

  Score.associate = function(models) {
    // We're saying that a Score should belong to an User
    // A Score can't be created without an User due to the foreign key constraint
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Score;
};
