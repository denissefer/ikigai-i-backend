const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sslazio1',
  database: 'ikigai_database',
});

// Perform an asynchronous query to test the connection
app.get('/', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT 1');
    console.log('Successful connection to the database');
    res.send('Welcome to the Ikigai application!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).send('Internal server error');
  }
});

// Register a new user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate that all necessary fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required.' });
  }

  try {
    // Hash the password using bcrypt
    const passwordHash = await bcrypt.hash(password, 10);  // Hash the password

    // Insert the new user into the database
    const [result] = await db.query(
      'INSERT INTO users (id, username, email, password_hash) VALUES (UUID(), ?, ?, ?)',
      [username, email, passwordHash]
    );

    res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate that username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Find user in the database
    const [rows] = await db.query('SELECT id, username, email, password_hash FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const user = rows[0];

    // Compare password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET, // Use the secret key from .env
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful.',
      token
    });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
