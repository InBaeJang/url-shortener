import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Url } from "../entity/Url";
import { baseUrl } from '../constants'
import HttpStatus from 'http-status-codes'
import cuid from 'cuid'

export class UrlController {

  private urlRepository = getRepository(Url);

  async shortenUrl(req: Request, res: Response, next: NextFunction) {
    console.log("  longUrl: " + req.body.longUrl)
    const longUrl: string = req.body.longUrl;

    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (longUrl.match(regex)) {
      try {

        let url: Url
        let urls: Url[] = await this.urlRepository.find({
          where: {
            longUrl: longUrl
          }
        });

        if (urls.length > 0) {
          url = urls[0]
        } else {
          const code: string = cuid().slice(-4)
          url = new Url()
          url.id = code
          url.longUrl = longUrl
          url.shortUrl = baseUrl + "/" + code
          await this.urlRepository.save(url)
        }
        res.status(HttpStatus.OK).json(url)
      } catch (err) {
        console.error(err.message)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json("Server Error");
      }
    } else {
      res.status(HttpStatus.BAD_REQUEST).json("Invalid long Url");
    }
  }

  async redirect(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const url = await this.urlRepository.findOne(id)

      if (url) {
        return res.redirect(url.longUrl)
      } else {
        return res.status(HttpStatus.NOT_FOUND).json("Url Not found")
      }
    } catch (err) {
      console.error(err);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: err.message,
      });
    }
  }
}