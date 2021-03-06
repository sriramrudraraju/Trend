import express, { Request, Response, NextFunction } from "express";
import createError, { HttpError } from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import { indexRouter } from "./routes/index";
import { usersRouter } from "./routes/users";

var app = express();

app.use(logger("dev"));
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const baseUrl = '/api'
app.use(`${baseUrl}/`, indexRouter);
app.use(`${baseUrl}/users`, usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

export default app;
