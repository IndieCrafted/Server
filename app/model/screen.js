'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Screen = app.model.define('t_screen', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: false,
  });

  return Screen;
};
