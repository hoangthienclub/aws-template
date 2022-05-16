import mongoose from 'mongoose'
import constants from '../utils/constant'


const url = `mongodb+srv://${constants.mongoConfig.host.dbUsername}:${constants.mongoConfig.host.dbPassword}@${constants.mongoConfig.host.cluster}/${constants.mongoConfig.dbName}?retryWrites=true&w=majority`


export class MongoDB {
    
    connect = async () => {
        mongoose.set('debug', true);
        console.log('Connecting to DB');
        
        if (mongoose.connection.readyState == 1) {
    
            console.log('Using old connection');
            
            return mongoose;
        }
        else {
            console.log('Creating new connection');
                await  mongoose.connect(url, {
                dbName: constants.mongoConfig.dbName
            });
            console.log(`New connection created  ${mongoose.connection.readyState}`);
            
            return mongoose;
        }
    
    }

    close = async () => {


        if (mongoose.connection.readyState == 1) {

            console.log('Mongo Connection closed');

            mongoose.connection.close();

        }

    }

}