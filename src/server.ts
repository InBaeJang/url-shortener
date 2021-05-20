import express, { Application, NextFunction, Request, Response } from "express";
import AppError from '@errors/AppError';
import HttpStatus from 'http-status-codes'
import index from '@routes/index'
import url from '@routes/url'
import { connectPG } from './pg'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.TS_NODE_DEV === 'true'
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

app.listen(port, () =>{
  // connectPG()
  console.log(`Url-shortener server ready at: http://localhost:${port}`)
});

// (완료) env file 분리
// (완료) PG connection pool 적용
// (완료) typescript package path alias 
// (완료) Http Status Code 적용
// (완료) shorten url logic 구성
// TODO url table id에 code 저장 code는 cuid에서 생성된 id에서 뒷자리 4개를 뽑아서 사용
// TODO pg 제거 및 Node.js typeORM 적용
// TODO url 조회
// TODO jtest 사용해서 테스트 코드 작성해보기