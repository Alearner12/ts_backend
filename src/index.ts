import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './config/mongodb';
import { connectPostgreSQL } from './config/postgresql';
import userRoutes from './routes/userRoutes';
import { requestLogger, errorHandler, notFoundHandler } from './middleware';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to TypeScript Backend Journey!',
    status: 'Server is running',
    description: 'A learning project for backend development with TypeScript',
    endpoints: {
      health: '/health',
      users: '/api/users (GET, POST)',
      userById: '/api/users/:id (GET, PUT, DELETE)'
    },
    technologies: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB (Mongoose)',
      'PostgreSQL (pg)'
    ]
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Initialize database connections and start server
const startServer = async () => {
  try {
    // Connect to databases
    // Uncomment the database you want to use:
    
    // MongoDB connection
    // await connectMongoDB();
    
    // PostgreSQL connection
    // await connectPostgreSQL();
    
    // Start server
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`\n🚀 Available endpoints:`);
      console.log(`   GET  /              - Welcome message`);
      console.log(`   GET  /health        - Health check`);
      console.log(`   GET  /api/users     - Get all users`);
      console.log(`   POST /api/users     - Create user`);
      console.log(`   GET  /api/users/:id - Get user by ID`);
      console.log(`   PUT  /api/users/:id - Update user`);
      console.log(`   DEL  /api/users/:id - Delete user`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
