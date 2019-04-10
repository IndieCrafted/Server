'use strict';

const { Controller } = require('egg');

class ScreenController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'list';
  }

  async update() {
    const { ctx } = this;
    ctx.body = 'update';
  }
}

module.exports = ScreenController;
