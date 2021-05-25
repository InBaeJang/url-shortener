import 'dotenv/config';
import 'reflect-metadata';
import express, { Application, NextFunction, Request, Response } from "express";
import AppError from './AppError';
import HttpStatus from 'http-status-codes'
import { createTypeormConnection } from './connection';
import index from './routes/index'
import url from './routes/url'

const port = process.env.NODE_ENV === 'development'
  ? 3033 // for dev & test
  : 3004 // for production (must be absolute)
  
const app: Application = express();
app.use(express.json());
app.use("/", index);
app.use("/api/url", url);
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (req: Request, res: Response) => {
  console.log('Hello World!')
  res.send('Hello World!')
})

app.listen(port, async () =>{
  console.log(`Url-shortener server ready at: http://localhost:${port}`)
});

(async () => {
  const connection = await createTypeormConnection()
  console.log(connection.isConnected)
  // console.log(await connection.manager.find(Url))

  // const longUrl = "https://floev.com"
  // const findUrl = await Url.findByLongUrl(longUrl)
  // console.log("findUrl: " + findUrl)
})();