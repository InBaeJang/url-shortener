import express, {
  Request,
  Response,
  Router,
} from "express";
import validUrl from "valid-url";
import shortid from "shortid";
const router: Router = express.Router();
const baseUrl: string = process.env.TS_NODE_DEV === 'true'
? "http://localhost:3033" // for dev & test
: "http://localhost:3004" // for production (must be absolute)

router.post("/shorten", async (req: Request, res: Response) =>
  shorter(req, res)
);

const shorter = async (req: Request, res: Response) => {
  console.log(req.body.longUrl)
  const longUrl: string = req.body.longUrl;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  const urlCode: string = shortid.generate();

  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  if (longUrl.match(regex)) {
    try {
      
      // let url = await prisma.url.findUnique({ where: { longUrl } });

      // if (url) {
      //   res.json(url);
      // } else {
      //   const shortUrl = baseUrl + "/" + urlCode;

      //   url = await prisma.url.create({
      //     data: {
      //       longUrl,
      //       shortUrl,
      //       urlCode,
      //     }
      //   });

      //   res.json(url);
      // }
    } catch (err) {
      console.error(err.message), res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid long Url");
  }
};

export default router;
