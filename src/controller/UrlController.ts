import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Url } from "../entity/Url";
import { baseUrl } from '../constants'
import HttpStatus from 'http-status-codes'
import cuid from 'cuid'

export class UrlController {

  private urlRepository = getRepository(Url);

  async shortenUrl(request: Request, response: Response, next: NextFunction) {
    console.log("  longUrl: " + request.body.longUrl)
    const longUrl: string = request.body.longUrl;

    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (longUrl.match(regex)) {
      try {

        let url
        let urls = await this.urlRepository.find({
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

        response.status(HttpStatus.OK).json(url)
      } catch (err) {
        console.error(err.message)
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json("Server Error");
      }
    } else {
      response.status(HttpStatus.BAD_REQUEST).json("Invalid long Url");
    }
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.urlRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.urlRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.urlRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let urlToRemove = await this.urlRepository.findOne(request.params.id);
    if (urlToRemove)
      await this.urlRepository.remove(urlToRemove);
  }

}