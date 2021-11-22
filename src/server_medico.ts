import { app } from './app';
const {port} = require('./config');

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});
