import dotenv from 'dotenv';
import { access } from 'fs/promises';

if (process.env.NODE_ENV !== 'production') {
  const isLocalEnvExists = await access('.env.local')
    .then(() => true)
    .catch(() => false);

  dotenv.config({
    path: `.env.${isLocalEnvExists ? 'local' : 'development'}`
  });
}

export const {
  DB_HOST,
  HOST_PORT,
  JWT_SECRET,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = /** @type {Record<string, string>} */ (process.env);
