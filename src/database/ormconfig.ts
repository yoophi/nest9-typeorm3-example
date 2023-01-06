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
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [__dirname + '/../migrations/*{.js,.ts}'],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);
