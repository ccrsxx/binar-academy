const {
  DB_USERNAME = 'postgres',
  DB_PASSWORD = 'Emilia-tan',
  DB_DATABASE = 'ccrsxx_rental_car_development',
  DB_HOST = '127.0.0.1'
} = process.env;

/** @type {import('sequelize').Options} */
export default {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  host: DB_HOST,
  dialect: 'postgres'
};
