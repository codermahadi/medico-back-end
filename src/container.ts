import express = require('express');
import {createContainer, asClass} from "awilix";
import {scopePerRequest} from "awilix-express";
import {TestService} from "./services/repositories/test.service";
import {SingUpService} from "./services/doctor/SingUp.service";
import {PatientSingUpService} from "./services/patient/SingUp.service";

export default (app: express.Application): void => {
    const container = createContainer({
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
        patientSingUpService: asClass(PatientSingUpService).scoped(),
        singUpService: asClass(SingUpService).scoped(),
        testService: asClass(TestService).scoped()
    });

    app.use(scopePerRequest(container));
};
