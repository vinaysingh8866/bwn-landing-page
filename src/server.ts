import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    user_agent TEXT NOT NULL,
    referrer TEXT NOT NULL,
    path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS downloads (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    user_agent TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_visits_timestamp ON visits(timestamp);
  CREATE INDEX IF NOT EXISTS idx_visits_location ON visits(location);
  CREATE INDEX IF NOT EXISTS idx_visits_referrer ON visits(referrer);
  CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
  CREATE INDEX IF NOT EXISTS idx_downloads_timestamp ON downloads(timestamp);
  CREATE INDEX IF NOT EXISTS idx_downloads_location ON downloads(location);
`;

pool.query(createTablesQuery).catch(err => {
  console.error('Error creating tables:', err);
});

app.post('/api/track-visit', async (req, res) => {
  try {
    const { location, timestamp, userAgent, referrer, path } = req.body;
    
    const query = `
      INSERT INTO visits (location, timestamp, user_agent, referrer, path)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    
    const values = [location, timestamp, userAgent, referrer, path];
    const result = await pool.query(query, values);
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/track-download', async (req, res) => {
  try {
    const { location, timestamp, userAgent } = req.body;
    
    const query = `
      INSERT INTO downloads (location, timestamp, user_agent)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    
    const values = [location, timestamp, userAgent];
    const result = await pool.query(query, values);
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error tracking download:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app; 