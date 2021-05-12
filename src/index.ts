import express, { Application, Request, Response } from "express";
import index from './routes/index'
import url from './routes/url'
const port = process.env.TS_NODE_DEV === 'true'
  ? 3033 // for dev & test
  : 3004 // for production (must be absolute)

const app: Application = express();
app.use(express.json());
app.use("/", index);
app.use("/api/url", url);

app.get('/', (req: Request, res: Response) => {
    console.log('Hello World!')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Url-shortener server ready at: http://localhost:${port}`));

// TODO Http Status Code 적용
// TODO DB Connect, 조회