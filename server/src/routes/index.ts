import express, { Request, Response, NextFunction } from "express";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.send("Hello World");
  }
);

export { indexRouter };
