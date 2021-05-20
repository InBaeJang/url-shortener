import express, {
  Request,
  Response,
  Router,
} from "express";
import validUrl from "valid-url";
import cuid from 'cuid'
import HttpStatus from 'http-status-codes'
import { Url } from '../entity/Url';
const router: Router = express.Router();
const baseUrl: string = process.env.TS_NODE_DEV === 'true'
? "http://localhost:3033" // for dev & test
: "http://localhost:3004" // for production (must be absolute)

router.post("/shorten", async (req: Request, res: Response) =>{
  console.log("  longUrl: " + req.body.longUrl)
  const longUrl: string = req.body.longUrl;

  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (longUrl.match(regex)) {
    try {
      const findUrl = await Url.findByLongUrl(longUrl)

      if(findUrl){
        res.json(findUrl)

      }else{
        const code: string = cuid().slice(-4)

        // code가 중복되지 않는지 검사 필요

        const url = new Url()
        url.id = code
        url.longUrl = longUrl
        url.shortUrl = baseUrl + "/" + code
        await url.save();

        res.json(url);
      }

      // let url = await prisma.url.findUnique({ where: { longUrl } });

      // if (url) {
      //   res.json(url);
      // } else {
      //   const shortUrl = baseUrl + "/" + code;

      //   url = await prisma.url.create({
      //     data: {
      //       longUrl,
      //       shortUrl,
      //       code,
      //     }
      //   });

      //   res.json(url);
      // }
    } catch (err) {
      console.error(err.message)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json("Server Error");
    }
  } else {
    res.status(HttpStatus.BAD_REQUEST).json("Invalid long Url");
  }
});

export default router;
