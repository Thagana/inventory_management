import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { IDatabaseConfigAttributes } from 'src/interface/dot-env.interface';
import { getURI } from './utils';
import { Product } from 'src/products/products.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config: IDatabaseConfigAttributes;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        
        const uri = getURI(config);
        
        const sequelize = new Sequelize(uri, {
         dialectOptions: {
           ssl: {
              require: true,
              rejectUnauthorized: false,
           },
        },
     });
        sequelize.addModels([Product]);
        await sequelize.sync();
        return sequelize;
    },
}];