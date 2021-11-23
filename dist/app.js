"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importStar(require("express"));
var morgan = require('morgan');
var awilix_express_1 = require("awilix-express");
var container_1 = __importDefault(require("./container"));
var cors_1 = __importDefault(require("cors"));
var compression = require('compression');
var rateLimit = require("express-rate-limit");
var app = (0, express_1.default)();
exports.app = app;
// parse application/x-www-form-urlencoded
app.use((0, express_1.urlencoded)({ extended: true }));
// JSON Support
app.use(express_1.default.json());
// CORS Support
app.use((0, cors_1.default)());
// for logs
app.use(morgan('tiny'));
// File compress
app.use(compression());
var limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: "Too many accounts created from this IP, please try again after an 1 hour"
});
//  apply to all requests
app.use(limiter);
// Container
(0, container_1.default)(app);
// Controllers
app.use((0, awilix_express_1.loadControllers)('controllers/*.ts', { cwd: __dirname }));
//# sourceMappingURL=app.js.map