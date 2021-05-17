import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Url {

    @PrimaryGeneratedColumn()
    urlCode: string;

    @Column()
    longUrl: string;

    @Column()
    shortUrl: string;

    constructor(urlCode:string, longUrl: string, shortUrl: string){
      this.urlCode = urlCode
      this.longUrl = longUrl
      this.shortUrl = shortUrl
    }
}