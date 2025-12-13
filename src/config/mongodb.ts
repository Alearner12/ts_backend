import mongoose from 'mongoose';

// Register event listeners once
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

/**
 * MongoDB Database Configuration
 * Connects to MongoDB using mongoose
 */
export const connectMongoDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ts_backend';
    
    await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectMongoDB;
