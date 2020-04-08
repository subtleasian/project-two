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
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  //User.associate = function(models) {
  //  User.hasMany(models.Post, {
  //    onDelete: "cascade"
  //  });
  //};
  return User;
};
