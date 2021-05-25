import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Url} from "../entity/Url";

export class UrlController {

    private urlRepository = getRepository(Url);

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
        if(urlToRemove)
          await this.urlRepository.remove(urlToRemove);
    }

}