"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var express_1 = __importDefault(require("express"));
var usersRouter = express_1.default.Router();
exports.usersRouter = usersRouter;
/* GET users listing. */
usersRouter.get("/", function (req, res, next) {
    res.send(JSON.stringify({ user: "Pro" }));
});
//# sourceMappingURL=users.js.map