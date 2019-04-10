'use strict';

module.exports = app => {
  const { INTEGER, STRING, DECIMAL, DATE } = app.Sequelize;

  const Beer = app.model.define('t_beer', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    number: INTEGER,
    brand: STRING,
    name: STRING,
    enName: STRING,
    origin: STRING,
    style: STRING,
    vol: STRING,
    spec: STRING,
    price: DECIMAL,
    status: INTEGER,
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    freezeTableName: true,
    timestamps: false,
    underscored: false,
  });

  return Beer;
};
