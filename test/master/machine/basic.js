var options = {
    manager: require("../../../src/managers/master/machine-manager"),
    model: require("dl-models").master.Machine,
    util: require("../../data-util/master/machine-data-util"),
    validator: require("dl-models").validator.master.machine,
    createDuplicate: false,
    keys: []
};

var basicTest = require("../../basic-test-factory");
basicTest(options);
