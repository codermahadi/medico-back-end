"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('joi');
var loginValidation = function (body) {
    var schemaRules = {
        phoneNumber: Joi.string().required().pattern(new RegExp('^((\\\\+[0-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$'), 'Invalid'),
        password: Joi.string().min(4).max(10).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    };
    // schema options
    var options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true // remove unknown props
    };
    var schema = Joi.object(schemaRules);
    // validate request body against schema
    return schema.validate(body, options);
};
exports.loginValidation = loginValidation;
//# sourceMappingURL=singin.js.map