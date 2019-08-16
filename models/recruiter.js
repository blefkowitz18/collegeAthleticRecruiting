/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
    var Recruiters = sequelize.define("Recruiter", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        len: [2, 100],
        allowNull: false
      },
      university: {
        type: DataTypes.STRING,
        len: [2, 50],
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        len: [2, 100],
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        len: [2, 50],
        allowNull: false
      }
    });
    Recruiters.associate = function(models) {
      Recruiters.hasMany(models.Athletes, {
        onDelete: "cascade"
      });
    };
    return Recruiters;
  };
  