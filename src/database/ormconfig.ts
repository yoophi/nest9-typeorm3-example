import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);
