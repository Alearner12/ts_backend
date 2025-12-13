import { Pool } from 'pg';

/**
 * PostgreSQL Database Configuration
 * Creates a connection pool for PostgreSQL
 */
const pool = new Pool({
  host: process.env.PG_HOST || 'localhost',
  port: parseInt(process.env.PG_PORT || '5432'),
  database: process.env.PG_DATABASE || 'ts_backend',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'password',
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

/**
 * Test PostgreSQL connection
 */
export const connectPostgreSQL = async (): Promise<void> => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL connected successfully');
    client.release();
  } catch (error) {
    console.error('❌ PostgreSQL connection failed:', error);
    // Don't exit - allow app to run without PostgreSQL
  }
};

/**
 * Execute a query on PostgreSQL
 */
export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export default pool;
