module.exports = function (sequelize, DataTypes) {
    var Payment = sequelize.define("Payment", {
        // Giving the Product model a name of type STRING
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        cost: DataTypes.INTEGER,
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Payment.associate = function (models) {
        // Associating Product with Posts
        // When an Product is deleted, also delete any associated Posts
        Payment.belongsTo(models.User, {
            foreignKey: 'pay_to'
        });
        Payment.belongsTo(models.User, {
            foreignKey: 'pay_from'
        });
    };

    return Payment;
};