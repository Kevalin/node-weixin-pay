var request = require('../').request;
var validation = require('../conf/validation');

module.exports = {
  order: {
    unified: function (config, data, cb) {
      var url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
      request(config, url, data,
        validation.unified.sending,
        validation.unified.receiving,
        cb);
    },
    query: function (config, data, cb) {
      var url = 'https://api.mch.weixin.qq.com/pay/orderquery';
      request(config, url, data,
        validation.order.query,
        validation.order.trade,
        cb);
    },
    close: function (config, data, cb) {
      var url = 'https://api.mch.weixin.qq.com/pay/closeorder';
      request(config, url, data,
        validation.order.query,
        validation.order.trade,
        cb);
    }
  },
  refund: {
    create: function (config, data, cb) {
      var url = 'https://api.mch.weixin.qq.com/secapi/pay/refund';
      request(config, url, data,
        validation.refund.create.sending,
        validation.refund.create.receiving,
        cb);
    },
    query: function (config, data, cb) {
      var url = 'https://api.mch.weixin.qq.com/pay/refundquery';
      request(config, url, data,
        validation.refund.query.sending,
        validation.refund.query.receiving,
        cb);
    }
  },
  statements: function (config, data, cb) {
    var url = 'https://api.mch.weixin.qq.com/pay/downloadbill';
    request(config, url, data,
      validation.statements.sending,
      null,
      cb);
  },
  report: function (config, data, cb) {
    var url = 'https://api.mch.weixin.qq.com/payitil/report';
    request(config, url, data,
      validation.report.sending,
      null,
      cb);
  }
};
