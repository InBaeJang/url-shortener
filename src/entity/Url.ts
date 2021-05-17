import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Url {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    urlCode: string;

    @Column()
    longUrl: string;

    @Column()
    shortUrl: string;

    constructor(id:number, urlCode:string, longUrl: string, shortUrl: string){
      this.id = id
      this.urlCode = urlCode
      this.longUrl = longUrl
      this.shortUrl = shortUrl
    }
}