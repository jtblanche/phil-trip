module.exports = function(sequelize, DataTypes) {
  var Receipt = sequelize.define("Receipt", {
    // Giving the Product model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    description: DataTypes.STRING,
    total: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    tip: DataTypes.INTEGER
  });

  Receipt.associate = function(models) {
    // Associating Product with Posts
    // When an Product is deleted, also delete any associated Posts
    Receipt.belongsToMany(models.User, {
      through: models.UserReceipt
    });
    Receipt.belongsTo(models.ReceiptType);
  };

  return Receipt;
};
