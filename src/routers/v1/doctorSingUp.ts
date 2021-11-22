import express, {Request, Response} from 'express';
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const {validation} = require('../../validator/validation');
const {Doctor} = require('../../models/riakDb/Doctor');

router.post('/', (req: Request, res: Response) => {
    const {body}: any = req;
    const keyId = uuidv4();

    const {error, value} = validation(body);
    if (error) {
        return res.status(401).json(error.details);
    } else {
        const Doc = new Doctor();
        console.log(Doc.move(10));
        return res.status(201).json(value);
    }
});

module.exports = router;
