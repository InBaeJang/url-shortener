import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application, NextFunction, Request, Response } from "express";
import { Routes } from "./routes";
import { Url } from "./entity/Url";
import HttpStatus from 'http-status-codes'
const port = process.env.NODE_ENV === 'development'
  ? 3033 // for dev & test
  : 3004 // for production (must be absolute)

createConnection().then(async connection => {
  const app: Application = express();
  app.use(express.json());
  // app.use("/", index);
  // app.use("/api/url", url);

  app.get('/', (req: Request, res: Response) => {
    console.log('Hello World!')
    res.send('Hello World!')
  })
  // register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });


  app.listen(port, async () => {
    console.log(`Url-shortener server ready at: http://localhost:${port}`)
  });

  // // insert new users for test
  // await connection.manager.save(connection.manager.create(User, {
  //   firstName: "Timber",
  //   lastName: "Saw",
  //   age: 27
  // }));
  // await connection.manager.save(connection.manager.create(User, {
  //   firstName: "Phantom",
  //   lastName: "Assassin",
  //   age: 24
  // }));

  console.log("Express server ready. Open http://localhost:3000/users to see results");

}).catch(error => console.error(error));