import {Login} from "../common/interfaces/Login";

const Joi = require('joi');

const loginValidation = (body: Login) => {
    const schemaRules = {
        phoneNumber: Joi.string().required().pattern(new RegExp('^((\\\\+[0-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$'), 'Invalid',),
        password: Joi.string().min(4).max(10).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    };

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const schema = Joi.object(schemaRules);


    // validate request body against schema
    return schema.validate(body, options);
};
exports.loginValidation = loginValidation;
