/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
    var Athletes = sequelize.define("Athletes", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      },
      name: {
        type: DataTypes.STRING,
        len: [2, 50],
        allowNull: false
      },
      sport: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      position: {
        type: DataTypes.STRING,
        len: [2, 200],
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      height_feet: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      height_inches: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      high_school: {
        type: DataTypes.STRING,
        len: [2, 200],
        allowNull: false
      },
      about_me: {
        type: DataTypes.TEXT,
        len: [50, 10000],
        allowNull: false
      },
      video_or_picture: {
        type: DataTypes.TEXT,
        isUrl: true,
        allowNull: false
      },
      logged_in:{
        type: DataTypes.BOOLEAN,
        default: false,
      }
    });
    // Athletes.associate = function(models) {
    //     Athletes.belongsTo(models.Recruiter, {});
    // };
    return Athletes;
  };