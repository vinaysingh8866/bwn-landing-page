import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    user_agent TEXT NOT NULL,
    referrer TEXT NOT NULL,
    path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_visits_timestamp ON visits(timestamp);
  CREATE INDEX IF NOT EXISTS idx_visits_location ON visits(location);
  CREATE INDEX IF NOT EXISTS idx_visits_referrer ON visits(referrer);
  CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
`;

pool.query(createTableQuery).catch(err => {
  console.error('Error creating table:', err);
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
} 