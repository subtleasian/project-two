module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
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
  return User;
};
