module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Store model a name of type STRING
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    firstName:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:  {
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
    username:  {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
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
