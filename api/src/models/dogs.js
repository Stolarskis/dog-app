//All of this needs to be async

module.exports = (sequelize, DataTypes) => {
  var Dogs = sequelize.define("Dogs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    breed: { type: DataTypes.STRING, allowNull: false },
    sex: { type: DataTypes.STRING, allowNull: true },
    fixed: { type: DataTypes.BOOLEAN, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: true },
    ageYears: { type: DataTypes.INTEGER, allowNull: true },
    owner: { type: DataTypes.STRING, allowNull: false },
  });

  Dogs.associate = function (models) {
    models.Dogs.hasOne(models.VaccRecord, { onDelete: "CASCADE" });
  };

  (async () => {
    await sequelize.sync();
  })();
  return Dogs;
};
