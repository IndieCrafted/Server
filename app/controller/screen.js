'use strict';

const { Controller } = require('egg');

class ScreenController extends Controller {
  async list() {
    const { ctx } = this;
    const queryRule = {
      id: { type: 'int', min: 1, required: false },
    };
    ctx.validate(queryRule, ctx.query);
    const data = await ctx.service.screen.list(ctx.query);
    ctx.helper.success({ ctx, data });
  }

  async addBeer() {
    const { ctx } = this;
    const bodyRule = {
      screenId: { type: 'int', min: 1 },
      beerIds: 'array',
    };
    ctx.validate(bodyRule, ctx.request.body);
    const data = await ctx.service.screen.addBeer(ctx.request.body);
    ctx.helper.success({ ctx, data });
  }

  async removeBeer() {
    const { ctx } = this;
    const bodyRule = {
      screenId: { type: 'int', min: 1 },
      beerId: { type: 'int', min: 1 },
    };
    ctx.validate(bodyRule, ctx.request.body);
    const data = await ctx.service.screen.removeBeer(ctx.request.body);
    ctx.helper.success({ ctx, data });
  }
}

module.exports = ScreenController;
