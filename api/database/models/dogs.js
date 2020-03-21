module.exports = (sequelize, DataTypes) => {
  var Dogs = sequelize.define("Dogs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    breed: { type: DataTypes.STRING, allowNull: false },
    sex: { type: DataTypes.STRING, allowNull: false },
    weight: { type: DataTypes.STRING, allowNull: true },
    age: { type: DataTypes.STRING, allowNull: true },
    owner: { type: DataTypes.STRING, allowNull: false }
  });

  /**
  Dogs.associate = function(models) {
    models.Dogs.hasMany(models.Task);
  };
  */

  (async () => {
    await sequelize.sync();
  })();
  return Dogs;
};
