import 'dotenv/config';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize Neon client
const sql = neon(process.env.DB_URL);

// Create Drizzle ORM instance
const db = drizzle(sql);

export { db, sql };