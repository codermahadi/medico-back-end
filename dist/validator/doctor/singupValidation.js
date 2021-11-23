"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('joi');
var singUpValidation = function (body) {
    var schemaRules = {
        name: Joi.string().min(1).max(20).empty('').required(),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phoneNumber: Joi.string().required().pattern(new RegExp('^((\\\\+[0-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$'), 'Invalid'),
        password: Joi.string().min(4).max(10).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        channel: Joi.string().required(),
        image: Joi.string().empty('').required().uri(),
        iosDeviceId: Joi.string().empty(''),
        androidDeviceId: Joi.string().empty(''),
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
exports.singUpValidation = singUpValidation;
//# sourceMappingURL=singupValidation.js.map