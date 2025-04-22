import express, { RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
import process from 'node:process';
import session, { SessionData } from 'express-session';
const { Pool } = pkg;

// --- Type Augmentation for express-session --- 
declare module 'express-session' {
  interface SessionData {
    user?: { username: string }; // Add our custom user property
  }
}
// --- End Type Augmentation ---

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// --- Session Configuration (BEFORE CORS) --- 
if (!process.env.SESSION_SECRET) {
  console.warn('WARNING: SESSION_SECRET environment variable is not set. Using default, insecure secret. Set this in production!');
}
const sessionSecret = process.env.SESSION_SECRET || 'default_insecure_session_secret';

// @ts-ignore - Suppress persistent type error for session middleware
app.use(session({
  secret: sessionSecret,
  resave: false, 
  saveUninitialized: false, 
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    httpOnly: true, 
    maxAge: 24 * 60 * 60 * 1000 
  }
}));
// --- End Session Configuration ---

// --- CORS Configuration (AFTER Session) ---
app.use(cors({ 
    origin: process.env.NODE_ENV === 'production' 
            ? 'YOUR_PRODUCTION_FRONTEND_URL' 
            : 'http://localhost:5173', 
    credentials: true 
}));
// --- End CORS Configuration ---

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

// --- Protected Download Stats Endpoint --- 
app.get('/api/download-count', async (req, res) => { // Changed to GET, no body needed

  // Check if user is authenticated via session
  if (!req.session || !req.session.user) {
    console.log('/api/download-count: Unauthorized access attempt.');
    return res.status(401).json({ message: 'Unauthorized: Please log in.' });
  }

  // Authentication successful (session exists) - query the database
  console.log(`/api/download-count: Authorized access by ${req.session.user.username}`);
  try {
    const totalCountResult = await pool.query('SELECT COUNT(*) AS total_download_count FROM downloads;');
    const totalDownloadCount = totalCountResult.rows[0].total_download_count;

    const locationCountResult = await pool.query(`
      SELECT location, COUNT(*) AS count 
      FROM downloads 
      WHERE location IS NOT NULL AND location != ''
      GROUP BY location 
      ORDER BY count DESC;
    `);
    const downloadsByLocation = locationCountResult.rows;

    res.status(200).json({
      total_download_count: totalDownloadCount,
      downloads_by_location: downloadsByLocation
    });

  } catch (error) {
    console.error('Database query error in /api/download-count:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
// --- End Protected Download Stats Endpoint ---

// --- Authentication Endpoints --- 

// Login Endpoint
app.post('/api/auth/signin', async (req, res) => {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing username or password' });
  }

  // Verify credentials
  if (username === adminUsername && password === adminPassword) {
    // Regenerate session to prevent session fixation
    req.session.regenerate(err => {
      if (err) {
        console.error('Session regeneration error:', err);
        return res.status(500).json({ message: 'Login error' });
      }
      // Store user info in session (just username is fine, avoid storing password)
      req.session.user = { username: adminUsername }; 
      console.log('Session created for:', req.session.user.username);
      res.status(200).json({ message: 'Login successful', user: req.session.user });
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Session Check Endpoint
app.get('/api/auth/session', (req, res) => {
  if (req.session && req.session.user) {
    console.log('Session check successful for:', req.session.user.username);
    res.status(200).json({ user: req.session.user });
  } else {
    console.log('Session check: No active session found.');
    res.status(401).json({ message: 'No active session' });
  }
});

// Logout Endpoint
app.post('/api/auth/signout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Session destruction error:', err);
      return res.status(500).json({ message: 'Logout error' });
    }
    res.clearCookie('connect.sid'); // Default session cookie name
    console.log('Session destroyed.');
    res.status(200).json({ message: 'Logout successful' });
  });
});

// --- End Authentication Endpoints ---

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app; 