import { getConnectionOptions, createConnection } from 'typeorm';
import dotenv from 'dotenv'
dotenv.config()

export const createTypeormConnection = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return await createConnection({...connectionOptions, name: "default"});
};