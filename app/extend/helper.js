'use strict';

// 处理成功响应
exports.success = ({ ctx, data, msg = '操作成功' }) => {
  ctx.status = 200;
  ctx.body = {
    code: 0,
    msg,
    data,
  };
};
