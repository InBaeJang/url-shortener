import { Client } from "pg";

const pgClient = new Client({
  host : 'localhost',
  database : 'postgres',
  user : 'inbader',
  password : 'yellowice3337',
  port : 5432,
})

pgClient.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connection success!')
  }
});

export default pgClient