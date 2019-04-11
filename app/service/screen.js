'use strict';

const { Service } = require('egg');

class ScreenService extends Service {
  async list(params) {
    const { ctx } = this;
    const { id } = params;
    const result = await ctx.model.Screen.findOne({
      where: {
        id,
      },
      include: [
        {
          model: ctx.model.Beer,
          as: 'beerList',
          through: { attributes: [] },
        },
      ],
    });
    return result;
  }

  async addBeer(params) {
    const { ctx } = this;
    const { screenId, beerIds } = params;
    const screen = await ctx.model.Screen.findOne({
      where: {
        id: screenId,
      },
      include: [
        {
          model: ctx.model.Beer,
          as: 'beerList',
          attributes: [ 'id' ],
          through: { attributes: [] },
        },
      ],
    });
    if (!screen) {
      ctx.throw(400, '错误的屏幕 ID', { code: 1 });
    }
    if ((screen.beerList.length + beerIds.length) > 8) {
      ctx.throw(400, '超出屏幕显示限制', { code: 2 });
    }
    await screen.addBeerList(beerIds);
    return null;
  }

  async removeBeer(params) {
    const { ctx } = this;
    const { screenId, beerId } = params;
    const screen = await ctx.model.Screen.findOne({
      where: {
        id: screenId,
      },
    });
    if (!screen) {
      ctx.throw(400, '错误的屏幕 ID', { code: 1 });
    }
    await screen.removeBeerList(beerId);
    return null;
  }
}

module.exports = ScreenService;
