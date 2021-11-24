import {Doctor} from "../../common/interfaces/Doctor";
import {Channel} from "../../common/enums";

const Joi = require('joi');

const singUpValidation = (body: Doctor) => {
    const schemaRules = {
        name: Joi.string().min(1).max(20).empty('').required(),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        phoneNumber: Joi.string().required().pattern(new RegExp('^((\\\\+[0-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$'), 'Invalid',),
        password: Joi.string().min(4).max(10).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
        channel: Joi.string().required().valid(Channel.IOS, Channel.ANDROID, Channel.WEB),
        image: Joi.string().empty('').required().uri(),
        iosDeviceId: Joi.string().empty(''),
        androidDeviceId: Joi.string().empty(''),
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
exports.singUpValidation = singUpValidation;
