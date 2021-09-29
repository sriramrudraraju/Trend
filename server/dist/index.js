"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
var http_1 = __importDefault(require("http"));
var debug_1 = __importDefault(require("debug"));
var app_1 = __importDefault(require("./src/app"));
var serverName = (0, debug_1.default)("express-typescript:server");
/**
 * Create HTTP server.
 */
var server = http_1.default.createServer(app_1.default);
/**
 * Normalize a port into a number, string, or false.
 */
var normalizePort = function (val) {
    if (val) {
        var port_1 = parseInt(val, 10);
        // port number
        return port_1;
    }
    return false;
};
/**
 * Event listener for HTTP server "error" event.
 */
var onError = function (error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};
/**
 * Event listener for HTTP server "listening" event.
 */
var onListening = function () {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + (addr === null || addr === void 0 ? void 0 : addr.port);
    serverName("Listening on " + bind);
};
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || "8000");
app_1.default.set("port", port);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
//# sourceMappingURL=index.js.map