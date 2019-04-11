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

  Screen.associate = () => {
    const { Beer, ScreenBeer } = app.model;

    Screen.belongsToMany(Beer, {
      through: {
        model: ScreenBeer,
        unique: false,
      },
      foreignKey: 'screenId',
      constraints: false,
      as: 'beerList',
    });
  };

  return Screen;
};
