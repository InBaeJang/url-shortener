import express, {
  Request,
  Response,
  Router,
} from "express";
const router: Router = express.Router();

const reDirector = async (req: Request, res: Response) => {
  try {
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
    res.status(500).json("Server error");
  }
};

router.get("/:code", async (req: Request, res: Response) =>
  reDirector(req, res)
);

export default router
