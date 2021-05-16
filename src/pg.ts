import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config()

export const pgPool = new Pool({
  host: process.env.DB_HOSTNAME,
  database : process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export function connectPG(){
  pgPool.connect(err => {
    if (err) {
      console.error('connection error: ', err.stack)
    } else {
      console.log('connection success!')
    }
  });
}