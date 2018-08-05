module.exports = function (sequelize, DataTypes) {
    var PaymentMethod = sequelize.define("PaymentMethod", {
        // Giving the Product model a name of type STRING
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        description: DataTypes.STRING
    });

    PaymentMethod.associate = function (models) {
        // Associating Product with Posts
        // When an Product is deleted, also delete any associated Posts
        PaymentMethod.belongsTo(models.User);
    };

    return PaymentMethod;
};