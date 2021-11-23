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
var uuid_1 = require("uuid");
var test_service_1 = require("../services/repositories/test.service");
var singUpValidation = require('../validator/doctor/singupValidation').singUpValidation;
var loginValidation = require('../validator/singin').loginValidation;
var CheckController = /** @class */ (function () {
    function CheckController(testService) {
        this.testService = testService;
    }
    CheckController.prototype.singUp = function (req, res) {
        var body = req.body;
        var keyId = (0, uuid_1.v4)();
        var _a = singUpValidation(body), error = _a.error, value = _a.value;
        if (error) {
            res.status(401).json(error.details);
        }
        else {
            res.status(201).json(value);
        }
    };
    CheckController.prototype.login = function (req, res) {
        var body = req.body;
        var _a = loginValidation(body), error = _a.error, value = _a.value;
        if (error) {
            res.status(401).json(error.details);
        }
        else {
            res.status(201).json(value);
        }
    };
    __decorate([
        (0, awilix_express_1.route)('/singup'),
        (0, awilix_express_1.POST)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CheckController.prototype, "singUp", null);
    __decorate([
        (0, awilix_express_1.route)('/login'),
        (0, awilix_express_1.POST)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CheckController.prototype, "login", null);
    CheckController = __decorate([
        (0, awilix_express_1.route)('/doctor'),
        __metadata("design:paramtypes", [test_service_1.TestService])
    ], CheckController);
    return CheckController;
}());
exports.CheckController = CheckController;
//# sourceMappingURL=singup.controller.js.map