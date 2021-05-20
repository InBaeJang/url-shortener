require("dotenv/config");

const devConfig = [{
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    'entitiesDir': 'src/entity',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber'
  },
}];

const prodConfig = [{
  name: 'default',name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    'entitiesDir': 'src/entity',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber'
  },
}];

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;