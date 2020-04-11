//All of this needs to be async

module.exports = (sequelize, DataTypes) => {
  var VaccRecord = sequelize.define("VaccRecord", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rabiesDueDate: { type: DataTypes.STRING, allowNull: false },
    heartwormDueDate: { type: DataTypes.STRING, allowNull: false },
    fleaTickDueDate: { type: DataTypes.STRING, allowNull: false }
  });

  VaccRecord.associate = function(models) {
    models.VaccRecord.belongsTo(models.Dogs);
  };

  (async () => {
    await sequelize.sync();
  })();
  return VaccRecord;
};
