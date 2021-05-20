import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Url extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  longUrl!: string;

  @Column()
  shortUrl!: string;

  // constructor(id:number, urlCode:string, longUrl: string, shortUrl: string){
  //   this.id = id
  //   this.urlCode = urlCode
  //   this.longUrl = longUrl
  //   this.shortUrl = shortUrl
  // }

  static findByLongUrl(longUrl:string){
    return this.createQueryBuilder("url")
        .where("url.longUrl = :longUrl", { longUrl })
        .getMany();
  }

  static findByCode(code: string) {
    return this.createQueryBuilder("url")
        .where("url.code = :code", { code })
        .getMany();
  }
}