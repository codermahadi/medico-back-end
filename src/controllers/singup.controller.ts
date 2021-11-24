import {Request, Response} from 'express';
import {route, POST} from "awilix-express";
import {v4 as uuidv4} from 'uuid';
import {SingUpService} from "../services/doctor/SingUp.service";
import {hashPassword} from "../common/utils/passwordHash.utils";
import {activeStatus, Channel} from "../common/enums";

const {singUpValidation} = require('../validator/doctor/singupValidation');
const {loginValidation} = require('../validator/singin');

@route('/doctor')
export class SingUpController {
    constructor(private readonly singUpService: SingUpService) {
    }

    @route('/singup')
    @POST()
    public singUp(req: Request, res: Response): void {
        const {body} = req;
        const keyId = uuidv4();
        //for validation
        const {error, value} = singUpValidation(body);
        if (error) {
            res.status(401).json(error.details);
        } else {
            value.id = keyId;
            value.password = hashPassword(value.password);
            value.iosDeviceId = 'no';
            value.androidDeviceId = 'no';
            value.xmppId = 'no';
            value.xmppStatus = activeStatus.OFFLINE

            //Data Submit here
            this.singUpService.create(value)
                .then(r =>
                    r ? res.status(201).json({
                            isSuccess: true,
                            message: 'Doctor sing up success'
                        }) :
                        res.status(401).json({isSuccess: false, message: 'Doctor sing up failed'}))
                .catch(err => res.status(400).json({isSuccess: false, message: err}));
        }
    }

    @route('/login')
    @POST()
    public login(req: Request, res: Response): void {
        const {body} = req;
        const {error, value} = loginValidation(body);
        if (error) {
            res.status(401).json(error.details);
        } else {
            res.status(201).json(value);
        }
    }
}
