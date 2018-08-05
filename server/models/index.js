var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
console.log(env);
var config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {
    User: require('./users.js')(sequelize, Sequelize),
    UserReceipt: require('./user-receipts.js')(sequelize, Sequelize),
    Receipt: require('./receipts.js')(sequelize, Sequelize),
    ReceiptType: require('./receipt-types.js')(sequelize, Sequelize),
    Payment: require('./payments.js')(sequelize, Sequelize),
    PaymentMethod: require('./payment-methods.js')(sequelize, Sequelize),
    Memory: require('./memories.js')(sequelize, Sequelize),
};

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
console.log(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;