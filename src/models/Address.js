const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zip_code: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.STRING,
      },
      { sequelize }
    );
  };

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
  } 
}

module.exports = Address;
