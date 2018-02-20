"use strict";
var helper = require('../../helper');
var OrderStatusHistoricalManager = require('../../../src/managers/sales/order-status-history-manager');
var productionOrder = require("./production-order-data-util");

class OrderStatusHistoricalDataUtil {
    getNewData() {
        return productionOrder.getNewTestData(true)
            .then((result) => {
                var Model = require('dl-models').sales.OrderStatusHistory;
                var data = new Model();

                data.productionOrderNo = result.orderNo;
                data.deliveryDateCorrection = new Date();
                data.reason = "Test Reason";

                return Promise.resolve(data);
            });
    }
}
module.exports = new OrderStatusHistoricalDataUtil();
