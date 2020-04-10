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
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Score, {
      onDelete: "cascade"
    });
  };
  return User;
};
