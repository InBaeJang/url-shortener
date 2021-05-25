import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Url extends BaseEntity {

  @PrimaryColumn()
  id!: string;

  @Column({
    unique: true,
  })
  longUrl!: string;

  @Column()
  shortUrl!: string;
}