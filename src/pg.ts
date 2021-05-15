import { Client } from "pg";

export const pgClient = new Client({
  host : process.env.DB_HOSTNAME,
  database : process.env.DB_NAME,
  user : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  port : 5432,
})

export function connectPG(){
  console.log(process.env)
  pgClient.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connection success!')
    }
  });
}