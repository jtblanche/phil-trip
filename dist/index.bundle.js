/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _server = __webpack_require__(/*! ./server */ "./server/index.js");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(/*! express */ "express");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var logger = __webpack_require__(/*! morgan */ "morgan");
var db = __webpack_require__(/*! ./server/models */ "./server/models/index.js");

var app = express();

var PORT = process.env.PORT || 8321; // Sets an initial port. We'll use this later in our listener

app.use(logger("dev"));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/build"));

app.use(_server2.default);

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/client/build/index.html");
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./server/config/config.json":
/*!***********************************!*\
  !*** ./server/config/config.json ***!
  \***********************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

module.exports = {"development":{"username":"root","password":"ChangeMe123","database":"phil_db","host":"127.0.0.1","port":3306,"dialect":"mysql"},"test":{"username":"root","password":"ChangeMe123","database":"phil_db","host":"127.0.0.1","port":3306,"dialect":"mysql"},"production":{"use_env_variable":"JAWSDB_URL"}};

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = __webpack_require__(/*! ./routes */ "./server/routes/index.js");

var _routes2 = _interopRequireDefault(_routes);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/api', _routes2.default);
exports.default = router;

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");
var env = "development" || "development";
console.log(env);
var config = __webpack_require__(/*! ./server/models/../config/config.json */ "./server/config/config.json")[env];

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {
  User: __webpack_require__(/*! ./users.js */ "./server/models/users.js")(sequelize, Sequelize),
  UserReceipt: __webpack_require__(/*! ./user-receipts.js */ "./server/models/user-receipts.js")(sequelize, Sequelize),
  Receipt: __webpack_require__(/*! ./receipts.js */ "./server/models/receipts.js")(sequelize, Sequelize),
  ReceiptType: __webpack_require__(/*! ./receipt-types.js */ "./server/models/receipt-types.js")(sequelize, Sequelize),
  Payment: __webpack_require__(/*! ./payments.js */ "./server/models/payments.js")(sequelize, Sequelize),
  PaymentMethod: __webpack_require__(/*! ./payment-methods.js */ "./server/models/payment-methods.js")(sequelize, Sequelize)
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

/***/ }),

/***/ "./server/models/payment-methods.js":
/*!******************************************!*\
  !*** ./server/models/payment-methods.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var PaymentMethod = sequelize.define("PaymentMethod", {
    // Giving the Product model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
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

/***/ }),

/***/ "./server/models/payments.js":
/*!***********************************!*\
  !*** ./server/models/payments.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var Payment = sequelize.define("Payment", {
    // Giving the Product model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    cost: DataTypes.INTEGER,
    paid: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
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

/***/ }),

/***/ "./server/models/receipt-types.js":
/*!****************************************!*\
  !*** ./server/models/receipt-types.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var ReceiptType = sequelize.define("ReceiptType", {
    // Giving the Product model a name of type STRING
    description: DataTypes.STRING
  });

  ReceiptType.associate = function (models) {
    // Associating Product with Posts
    // When an Product is deleted, also delete any associated Posts
    ReceiptType.hasMany(models.Receipt);
  };

  return ReceiptType;
};

/***/ }),

/***/ "./server/models/receipts.js":
/*!***********************************!*\
  !*** ./server/models/receipts.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var Receipt = sequelize.define("Receipt", {
    // Giving the Product model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    description: DataTypes.STRING,
    total: DataTypes.INTEGER,
    tax: DataTypes.INTEGER,
    tip: DataTypes.INTEGER
  });

  Receipt.associate = function (models) {
    // Associating Product with Posts
    // When an Product is deleted, also delete any associated Posts
    Receipt.belongsToMany(models.User, {
      through: models.UserReceipt
    });
    Receipt.belongsTo(models.ReceiptType);
  };

  return Receipt;
};

/***/ }),

/***/ "./server/models/user-receipts.js":
/*!****************************************!*\
  !*** ./server/models/user-receipts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var UserReceipt = sequelize.define("UserReceipt", {
    cost: DataTypes.INTEGER
  });

  return UserReceipt;
};

/***/ }),

/***/ "./server/models/users.js":
/*!********************************!*\
  !*** ./server/models/users.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Store model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    // Associating Store with Posts
    // When an Store is deleted, also delete any associated Posts
    User.belongsToMany(models.Receipt, {
      through: models.UserReceipt
    });
    User.hasMany(models.PaymentMethod);

    User.hasMany(models.Payment, {
      foreignKey: 'pay_to'
    });
    User.hasMany(models.Payment, {
      foreignKey: 'pay_from'
    });
  };

  return User;
};

/***/ }),

/***/ "./server/routes/activities.js":
/*!*************************************!*\
  !*** ./server/routes/activities.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _protectedRoute = __webpack_require__(/*! ./resources/protectedRoute */ "./server/routes/resources/protectedRoute.js");

var _protectedRoute2 = _interopRequireDefault(_protectedRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = __webpack_require__(/*! express-jwt */ "express-jwt");
var router = _express2.default.Router();
router.get('/', jwt({ secret: process.env.JWT_SECRET }), _protectedRoute2.default, function (req, res) {
    res.json(['activity 1', 'activity 2', 'activity 3']);
});
exports.default = router;

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s = __webpack_require__(/*! ./s3.js */ "./server/routes/s3.js");

var _s2 = _interopRequireDefault(_s);

var _login = __webpack_require__(/*! ./login.js */ "./server/routes/login.js");

var _login2 = _interopRequireDefault(_login);

var _activities = __webpack_require__(/*! ./activities.js */ "./server/routes/activities.js");

var _activities2 = _interopRequireDefault(_activities);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/', _s2.default);
router.use('/', _login2.default);
router.use('/activities', _activities2.default);
exports.default = router;

/***/ }),

/***/ "./server/routes/login.js":
/*!********************************!*\
  !*** ./server/routes/login.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _hashedPass = __webpack_require__(/*! ./resources/hashedPass.js */ "./server/routes/resources/hashedPass.js");

var _hashedPass2 = _interopRequireDefault(_hashedPass);

var _models = __webpack_require__(/*! ../models */ "./server/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var router = _express2.default.Router();
router.post('/hash', function (req, res) {
    _hashedPass2.default.getHash(req.body.password).then(function (hash) {
        res.send(hash);
    }, function () {
        res.status(500).send();
    });
});
router.post('/login', function (req, res) {
    _models2.default.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (found) {
        if (found) {
            _hashedPass2.default.compareHash(req.body.password, found.password).then(function () {
                res.json(jwt.sign({ username: req.body.username, password: req.body.password, id: found.id }, process.env.JWT_SECRET));
            }, function () {
                res.status(401).send();
            });
        } else {
            res.status(401).send();
        }
    }, function () {
        res.status(401).send();
    });
});
router.post('/register', function (req, res) {
    if (req.body.accessCode === "pajouxparty") {
        _hashedPass2.default.getHash(req.body.password).then(function (hash) {
            var user = {
                username: req.body.username,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            };
            _models2.default.User.create(user).then(function (newUser) {
                return res.json(jwt.sign({ username: newUser.username, id: newUser.id, password: newUser.password }, process.env.JWT_SECRET));
            }, function (error) {
                return res.status(401).json(error);
            });
        }, function () {
            res.status(500).send();
        });
        return;
    }
    res.status(401).json({ error: { accessCode: "Incorrect Access Code." } });
});
exports.default = router;

/***/ }),

/***/ "./server/routes/resources/hashedPass.js":
/*!***********************************************!*\
  !*** ./server/routes/resources/hashedPass.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptjs = __webpack_require__(/*! bcryptjs */ "bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareHash = function compareHash(password, hashPass) {
    return new Promise(function (resolve, reject) {
        _bcryptjs2.default.compare(password, hashPass, function (err, res) {
            if (err || !res) {
                return reject();
            }
            resolve(true);
        });
    });
};

var getHash = function getHash(password) {
    return new Promise(function (resolve, reject) {
        _bcryptjs2.default.hash(password, 10, function (err, res) {
            if (err) {
                return reject();
            }
            resolve(res);
        });
    });
};

exports.default = { getHash: getHash, compareHash: compareHash };

/***/ }),

/***/ "./server/routes/resources/protectedRoute.js":
/*!***************************************************!*\
  !*** ./server/routes/resources/protectedRoute.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hashedPass = __webpack_require__(/*! ./hashedPass */ "./server/routes/resources/hashedPass.js");

var _hashedPass2 = _interopRequireDefault(_hashedPass);

var _models = __webpack_require__(/*! ../../models */ "./server/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
    if (!req.user || !req.user.id || !req.user.username || !req.user.password) {
        return res.status(401).send();
    }

    _models2.default.User.findOne({
        where: {
            username: req.user.username
        }
    }).then(function (found) {
        if (found) {
            return _hashedPass2.default.compareHash(req.user.password, found.password).then(function () {
                console.log('test');
                return next();
            }, function () {
                res.status(401).send();
            });
        } else {
            return res.status(401).send();
        }
    }, function () {
        return res.status(401).send();
    });
};

/***/ }),

/***/ "./server/routes/s3.js":
/*!*****************************!*\
  !*** ./server/routes/s3.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/', __webpack_require__(/*! react-s3-uploader/s3router */ "react-s3-uploader/s3router")({
    bucket: "bixygroups",
    getFileKeyDir: function getFileKeyDir() {
        return "pbp";
    },
    uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));
exports.default = router;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "react-s3-uploader/s3router":
/*!*********************************************!*\
  !*** external "react-s3-uploader/s3router" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-s3-uploader/s3router");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map