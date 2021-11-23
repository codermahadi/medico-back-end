"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = require('./config').port;
app_1.app.listen(port, function () {
    console.log("Application is running on port " + port);
});
//# sourceMappingURL=server_medico.js.map