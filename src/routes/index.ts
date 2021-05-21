import express, {
  Request,
  Response,
  Router,
} from "express";
const router: Router = express.Router();
import HttpStatus from 'http-status-codes'

const reDirector = async (req: Request, res: Response) => {
  try {

    // const query = new Query("SELECT * FROM url")
    // PGClient.query(query)
    // const rows:any[] = []; /** * row에서 데이터 가져오고 end에서 검색할 때 발생한 각종 정보, error는 오류 발생시 */
    // query.on("row", (row:any) => {
    //   rows.push(row);
    // });
    // query.on('end', () => {
    //   console.log(rows);
    //   console.log('query done')
    //   // res.send(rows);
    //   // res.status(200).end();
    // });
    // query.on('error', (err:any) => {
    //   console.error(err.stack)
    // });

    // const url = await prisma.url.findUnique({
    //   where: { urlCode: req.params.code }
    // });

    // if (url) {
    //   return res.redirect(url.longUrl);
    // } else {
    //   return res.status(404).json("Url not found");
    // }
  } catch (err) {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err.message,
    });
  }
};

router.get("/:code", async (req: Request, res: Response) =>
  reDirector(req, res)
);

export default router
