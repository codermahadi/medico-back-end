"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingUpGateway = exports.Channel = exports.activeStatus = void 0;
var activeStatus;
(function (activeStatus) {
    activeStatus["ONLINE"] = "online";
    activeStatus["OFFLINE"] = "offline";
    activeStatus["BUSY"] = "busy";
})(activeStatus = exports.activeStatus || (exports.activeStatus = {}));
var Channel;
(function (Channel) {
    Channel["WEB"] = "web";
    Channel["IOS"] = "ios";
    Channel["ANDROID"] = "android";
})(Channel = exports.Channel || (exports.Channel = {}));
var SingUpGateway;
(function (SingUpGateway) {
    SingUpGateway["GOOGLE"] = "google";
    SingUpGateway["FACEBOOK"] = "facebook";
    SingUpGateway["ADMIN_PANEL"] = "adminPanel";
    SingUpGateway["VAS"] = "vas";
})(SingUpGateway = exports.SingUpGateway || (exports.SingUpGateway = {}));
//# sourceMappingURL=index.js.map