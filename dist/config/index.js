var dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT,
    riakNodes: process.env.RIAK_NODES,
};
//# sourceMappingURL=index.js.map