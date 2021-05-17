import { Pool } from 'pg';
import dotenv from 'dotenv'
dotenv.config()

export const pgPool = new Pool({
  host: process.env.POSTGRES_HOST,
  database : process.env.POSTGRES_NAME,
  user: process.env.POSTGRES_USER,
  password : process.env.POSTGRES_PASS,
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