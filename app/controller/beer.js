'use strict';

const { Controller } = require('egg');

class BeerController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.model.Beer.findAll();
    ctx.body = res;
  }

  async list() {
    const { ctx } = this;
    ctx.body = 'list';
  }

  async create() {
    const { ctx } = this;
    ctx.body = 'create';
  }

  async update() {
    const { ctx } = this;
    ctx.body = 'update';
  }

  async updateStatus() {
    const { ctx } = this;
    ctx.body = 'updateStatus';
  }
}

module.exports = BeerController;
