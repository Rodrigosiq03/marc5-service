import mongoose, { Mongoose, ConnectOptions } from 'mongoose';
import { envs } from '../helpers/envs';

let mongoConnection: Mongoose | null = null;

export const connectDB = async (): Promise<Mongoose> => {
  if (mongoConnection) {
    console.log('Reusing existing MongoDB connection');
    return mongoConnection;
  }

  try {
    const { MONGO_URI, STAGE } = envs
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined');
    }

    const uri = `${MONGO_URI}${STAGE!.toLowerCase()}`;
    console.log('Connecting to MongoDB, uri:', uri);
    
    // Cria a conexão apenas uma vez
    mongoConnection = await mongoose.connect(uri, {
      maxPoolSize: 200
    });

    console.log('MongoDB connected');
    return mongoConnection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // Lança o erro em vez de usar process.exit()
  }
};