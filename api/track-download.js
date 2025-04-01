const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Create tables if they don't exist
const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS downloads (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    user_agent TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_downloads_timestamp ON downloads(timestamp);
  CREATE INDEX IF NOT EXISTS idx_downloads_location ON downloads(location);
`;

pool.query(createTablesQuery).catch(err => {
  console.error('Error creating tables:', err);
});

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
}; 