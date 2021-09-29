"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
var express_1 = __importDefault(require("express"));
var indexRouter = express_1.default.Router();
exports.indexRouter = indexRouter;
/* GET home page. */
indexRouter.get("/", function (req, res, next) {
    res.send("Hello World");
});
//# sourceMappingURL=index.js.map