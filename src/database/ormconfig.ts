import 'reflect-metadata';
import { User } from '../users/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);
