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

<<<<<<< HEAD
  User.associate = function(models) {
    User.hasMany(models.Score, {
      onDelete: "cascade"
    });
  };
=======
  //User.associate = function(models) {
  //  User.hasMany(models.Post, {
  //    onDelete: "cascade"
  //  });
  //};
>>>>>>> origin/master
  return User;
};
