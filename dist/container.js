"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var awilix_express_1 = require("awilix-express");
var test_service_1 = require("./services/repositories/test.service");
exports.default = (function (app) {
    var container = (0, awilix_1.createContainer)({
        injectionMode: 'CLASSIC'
    });
    container.register({
        // repositories
        // subscriptionRepository: asClass(SubscriptionMockRepository).scoped(),
        // movementRepository: asClass(MovementMSSQLRepository).scoped(),
        // balanceRepository: asClass(BalanceMSSQLRepository).scoped(),
        // subscriptionRepository: asClass(SubscriptionMSSQLRepository).scoped(),
        // movementRepository: asClass(MovementMSSQLRepository).scoped(),
        // balanceRepository: asClass(BalanceMSSQLRepository).scoped(),
        // subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
        // movementRepository: asClass(MovementMySQLRepository).scoped(),
        // balanceRepository: asClass(BalanceMysqlRepository).scoped(),
        // services
        // subscriptionService: asClass(SubscriptionService).scoped(),
        // movementService: asClass(MovementService).scoped(),
        testService: (0, awilix_1.asClass)(test_service_1.TestService).scoped()
    });
    app.use((0, awilix_express_1.scopePerRequest)(container));
});
//# sourceMappingURL=container.js.map