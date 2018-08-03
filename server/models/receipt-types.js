module.exports = function(sequelize, DataTypes) {
    var ReceiptType = sequelize.define("ReceiptType", {
      // Giving the Product model a name of type STRING
      description: DataTypes.STRING
    });
  
    ReceiptType.associate = function(models) {
      // Associating Product with Posts
      // When an Product is deleted, also delete any associated Posts
      ReceiptType.hasMany(models.Receipt);
    };
  
    return ReceiptType;
  };