'use strict';

const { Controller } = require('egg');

class BeerController extends Controller {
  async list() {
    const { ctx } = this;
    const queryRule = {
      status: { type: 'enum', values: [ '0', '1' ], required: false },
      currentPage: { type: 'int', min: 1 },
      pageSize: { type: 'int', min: 1 },
    };
    ctx.validate(queryRule, ctx.query);
    const data = await ctx.service.beer.list(ctx.query);
    ctx.helper.success({ ctx, data });
  }

  async create() {
    const { ctx } = this;
    const bodyRule = {
      number: 'string',
      brand: 'string',
      name: 'string',
      enName: 'string',
      origin: 'string',
      style: 'string',
      vol: 'string',
      spec: 'string',
      price: 'number',
    };
    ctx.validate(bodyRule, ctx.request.body);
    const data = await ctx.service.beer.create(ctx.request.body);
    ctx.helper.success({ ctx, data });
  }

  async update() {
    const { ctx } = this;
    const bodyRule = {
      id: 'int',
      number: 'string?',
      brand: 'string?',
      name: 'string?',
      enName: 'string?',
      origin: 'string?',
      style: 'string?',
      vol: 'string?',
      spec: 'string?',
      price: 'number?',
    };
    ctx.validate(bodyRule, ctx.request.body);
    const data = await ctx.service.beer.update(ctx.request.body);
    ctx.helper.success({ ctx, data });
  }

  async deleteBeer() {
    const { ctx } = this;
    const bodyRule = {
      id: 'int',
    };
    ctx.validate(bodyRule, ctx.request.body);
    const data = await ctx.service.beer.destroy(ctx.request.body);
    ctx.helper.success({ ctx, data });
  }
}

module.exports = BeerController;
