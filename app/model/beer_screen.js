'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const ScreenBeer = app.model.define('t_screen_beer', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    screenId: INTEGER,
    beerId: INTEGER,
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: false,
  });

  return ScreenBeer;
};
