module.exports = function (sequelize, DataTypes) {
    var Memory = sequelize.define("Memory", {
        // Giving the Product model a name of type STRING
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        image: DataTypes.STRING
    });

    Memory.associate = function (models) {
        // Associating Product with Posts
        // When an Product is deleted, also delete any associated Posts
        Memory.belongsTo(models.User);
    };

    return Memory;
};