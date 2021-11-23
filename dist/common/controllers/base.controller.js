"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var application_exception_1 = require("../exceptions/application.exception");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.handleException = function (err, res) {
        if (err instanceof application_exception_1.ApplicationException) {
            res.status(400);
            res.send(err.message);
        }
        else {
            throw new Error(err);
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map