'use strict';
module.exports = (sequelize, DataTypes) => {
  var Local = sequelize.define('Local', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Local.associate = function(models) {
    Local.belongsTo(models.Local_type);
    Local.belongsToMany(models.Booking, {through: models.Booked_local});
    Local.belongsToMany(models.Procedure, {through: 'procedure_local'});
    Local.hasMany(models.Free_times);
  };
  return Local;
};
