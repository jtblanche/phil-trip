module.exports = function (sequelize, DataTypes) {
    var UserReceipt = sequelize.define("UserReceipt", {
        cost: DataTypes.INTEGER
    });

    return UserReceipt;
};