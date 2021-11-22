import express, {Application, urlencoded} from 'express';

const morgan = require('morgan');
import {loadControllers} from 'awilix-express';
import loadContainer from './container';
import cors from 'cors';

const compression = require('compression');
const rateLimit = require("express-rate-limit");

const app: Application = express();

// parse application/x-www-form-urlencoded
app.use(urlencoded({extended: true}));

// JSON Support
app.use(express.json());

// CORS Support
app.use(cors());

// for logs
app.use(morgan('tiny'));

// File compress
app.use(compression());

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: "Too many accounts created from this IP, please try again after an 1 hour"
});
//  apply to all requests
app.use(limiter);

// Container
loadContainer(app);

// Controllers
app.use(loadControllers(
    'controllers/*.ts',
    {cwd: __dirname}
));


export {app};
