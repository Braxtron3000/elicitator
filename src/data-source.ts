import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {Inquisition} from './entity/Inquisition';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Inquisition],
  migrations: [],
  subscribers: [],
});
