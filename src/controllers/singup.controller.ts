import {Request, Response} from 'express';
import {route, POST} from "awilix-express";
import {v4 as uuidv4} from 'uuid';
import {SingUpService} from "../services/doctor/SingUp.service";
import {hashPassword} from "../common/utils/passwordHash.utils";
import {activeStatus, Channel} from "../common/enums";
import moment from "moment";

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

            // added some additional data
            value.id = keyId;
            value.password = hashPassword(value.password); // password made HAS256
            value.iosDeviceId = 'no';
            value.androidDeviceId = 'no';
            value.xmppId = 'no';
            value.xmppStatus = activeStatus.OFFLINE
            value.createAt = moment().format();
            value.updatedAt = moment().format();

            //Data Submit here
            this.singUpService.create(value, (x) => {
                if (x && !x.isSuccess) {
                    res.status(401).json({isSuccess: false, message: x.message})
                } else if (x && x.isSuccess) {
                    res.status(201).json({isSuccess: true, message: x.message})
                }
            }).then(r => r).catch(err => res.status(400).json({isSuccess: false, message: err}));
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
