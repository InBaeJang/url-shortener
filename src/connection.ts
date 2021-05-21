import { getConnectionOptions, createConnection } from 'typeorm';
import dotenv from 'dotenv'
dotenv.config()

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return await createConnection({...connectionOptions, name: "default"});
};