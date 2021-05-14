import express, { Application, Request, Response } from "express";
import index from './routes/index'
import url from './routes/url'
const port = process.env.TS_NODE_DEV === 'true'
  ? 3033 // for dev & test
  : 3004 // for production (must be absolute)

import PGClient from './pg'
const Query = require('pg').Query

const app: Application = express();
app.use(express.json());
app.use("/", index);
app.use("/api/url", url);

app.get('/', (req: Request, res: Response) => {
    console.log('Hello World!')

  const query = new Query("SELECT * FROM url")
  PGClient.query(query)
  const rows:any[] = []; /** * row에서 데이터 가져오고 end에서 검색할 때 발생한 각종 정보, error는 오류 발생시 */
  query.on("row", (row:any) => {
    rows.push(row);
  });
  query.on('end', () => {
    console.log(rows);
    console.log('query done')
    // res.send(rows);
    // res.status(200).end();
  });
  query.on('error', (err:any) => {
    console.error(err.stack)
  });

    res.send('Hello World!')
})

app.get('/read', function(req, res, next) {
});

app.listen(port, () => console.log(`Url-shortener server ready at: http://localhost:${port}`));

// TODO DB Connect, 조회
// TODO Http Status Code 적용