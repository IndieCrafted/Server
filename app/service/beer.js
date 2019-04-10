'use strict';

const { Service } = require('egg');

class BeerService extends Service {
  async list(params) {
    const { ctx } = this;
    const { status, currentPage, pageSize } = params;
    const where = {};
    if (status) {
      where.status = parseInt(status);
    }
    const { rows, count } = await ctx.model.Beer.findAndCountAll({
      where,
      offset: (currentPage - 1) * pageSize,
      limit: pageSize,
    });
    return {
      iData: rows,
      currentPage,
      pageSize,
      total: count,
    };
  }

  async create(params) {
    const { ctx } = this;
    const item = await ctx.model.Beer.findOne({
      where: {
        number: params.number,
        status: 1,
      },
    });
    if (item) {
      ctx.throw(400, '与已上架的啤酒编号冲突', { code: 1 });
    }
    const result = await ctx.model.Beer.create({
      ...params,
      status: 1,
    });
    return result;
  }

  async update(params) {
    const { ctx } = this;
    const item = await ctx.model.Beer.findOne({
      where: {
        id: params.id,
      },
    });
    if (!item) {
      ctx.throw(400, '记录不存在', { code: 1 });
    }
    const result = await item.update({
      ...params,
    });
    return result;
  }

  async updateStatus(params) {
    const { ctx } = this;
    const item = await ctx.model.Beer.findOne({
      where: {
        id: params.id,
      },
    });
    if (!item) {
      ctx.throw(400, '记录不存在', { code: 1 });
    }
    const result = await item.update({
      status: params.nextStatus,
    });
    return result;
  }
}

module.exports = BeerService;
