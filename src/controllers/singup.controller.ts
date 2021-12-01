import {Request, Response} from 'express';
import {route, POST} from "awilix-express";
import {v4 as uuidv4} from 'uuid';
import {SingUpService} from "../services/doctor/SingUp.service";
import {hashPassword} from "../common/utils/passwordHash.utils";
import {activeStatus, Channel} from "../common/enums";
import moment from "moment";
import {BaseController} from "../common/controllers/base.controller";
import {iDoctor} from "../common/interfaces/iDoctor";

const {singUpValidation} = require('../validator/doctor/singupValidation');
const {loginValidation} = require('../validator/singin');

@route('/doctor')
export class SingUpController extends BaseController {
    constructor(private readonly singUpService: SingUpService) {
        super();
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
            value.uuid = keyId;
            value.password = hashPassword(value.password); // password made HAS256
            value.iosDeviceId = 'no';
            value.androidDeviceId = 'no';
            value.xmppId = 'no';
            value.xmppStatus = activeStatus.OFFLINE;
            value.manualStatus = activeStatus.OFFLINE;
            value.createAt = moment().format();
            value.updatedAt = moment().format();

            this.singUpService.create(value)
                .then(r => res.status(200).json({isSuccess: true, message: 'Doctor registration success!'}))
                .catch(e => res.status(400).json({isSuccess: false, message: e.message}))


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
