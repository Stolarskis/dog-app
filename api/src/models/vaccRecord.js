//All of this needs to be async

module.exports = (sequelize, DataTypes) => {
  var VaccRecord = sequelize.define("VaccRecord", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dhppDappDueDate: { type: DataTypes.STRING, allowNull: true },
    rabiesDueDate: { type: DataTypes.STRING, allowNull: true },
    bordetellaDueDate: { type: DataTypes.STRING, allowNull: true },
  });

  VaccRecord.associate = function (models) {
    models.VaccRecord.belongsTo(models.Dogs);
  };

  (async () => {
    sequelize.sync();
  })();
  return VaccRecord;
};
