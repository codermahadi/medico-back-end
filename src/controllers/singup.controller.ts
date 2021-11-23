import { Request, Response } from 'express';
import { route, POST } from "awilix-express";
import { v4 as uuidv4 } from 'uuid';
import {SingUpService} from "../services/doctor/SingUp.service";
const {singUpValidation} = require('../validator/doctor/singupValidation');
const {loginValidation} = require('../validator/singin');

@route('/doctor')
export class CheckController {
    constructor(private readonly singUpService: SingUpService) {}

    @route('/singup')
    @POST()
    public singUp(req: Request, res: Response): void {
        const {body} = req;
        const keyId = uuidv4();

        const {error, value} = singUpValidation(body);
        if (error) {
             res.status(401).json(error.details);
        } else {
            this.singUpService.create(value).then(r => console.log(45,r)).catch(err => console.log(err));
             res.status(201).json(value);
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
