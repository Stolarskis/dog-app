module.exports = (sequelize, DataTypes) => {
  var VaccRecord = sequelize.define("VaccRecord", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    rabies: { type: DataTypes.STRING, allowNull: false },
    heartworm: { type: DataTypes.STRING, allowNull: false },
    fleaTick: { type: DataTypes.STRING, allowNull: false }
  });

  /**
  Dogs.associate = function(models) {
    models.Dogs.hasMany(models.Task);
  };
  */

  (async () => {
    await sequelize.sync();
  })();
  return VaccRecord;
};
