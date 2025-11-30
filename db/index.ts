import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' }); // or .env.local

// Configure postgres client for serverless/edge environments
// Use Supabase Transaction pooler (port 6543) to avoid connection limits
const client = postgres(process.env.DATABASE_URL!, {
  max: 1, // Maximum 1 connection per serverless instance
  idle_timeout: 20, // Close idle connections after 20 seconds
  max_lifetime: 60 * 30, // Close connections after 30 minutes
  connect_timeout: 10, // Connection timeout in seconds
});

export const db = drizzle({ client });
