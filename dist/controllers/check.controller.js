"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckController = void 0;
var awilix_express_1 = require("awilix-express");
var test_service_1 = require("../services/repositories/test.service");
var CheckController = /** @class */ (function () {
    function CheckController(testService) {
        this.testService = testService;
    }
    CheckController.prototype.index = function (req, res) {
        res.send("mahadi");
    };
    CheckController.prototype.test = function (req, res) {
        res.send(this.testService.get());
    };
    // Endpoint to check user payload from jwt
    CheckController.prototype.userPayload = function (req, res) {
        res.send(req.user);
    };
    __decorate([
        (0, awilix_express_1.GET)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CheckController.prototype, "index", null);
    __decorate([
        (0, awilix_express_1.route)('/test'),
        (0, awilix_express_1.GET)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CheckController.prototype, "test", null);
    __decorate([
        (0, awilix_express_1.route)('/user-payload'),
        (0, awilix_express_1.GET)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CheckController.prototype, "userPayload", null);
    CheckController = __decorate([
        (0, awilix_express_1.route)('/check'),
        __metadata("design:paramtypes", [test_service_1.TestService])
    ], CheckController);
    return CheckController;
}());
exports.CheckController = CheckController;
//# sourceMappingURL=check.controller.js.map