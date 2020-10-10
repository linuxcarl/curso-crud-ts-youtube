import dotenv from 'dotenv';
import { IApi } from './interfaces/api.interface';

dotenv.config();

export default class Config {
  private static instance: Config;

  private constructor() {
    return Config.instance || new Config();
  }

  public static api(): IApi {
    return {
      port: process.env.PORT || 3000,
      cors: process.env.CORS || '*',
    };
  }
}
