const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const upload = multer();


const app = express();
const PORT = 3000;

app.use(cors());

// Middleware to handle JSON and x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PostgreSQL pool setup
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.envPOSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Login route with DB check
app.post('/login', upload.none(), async (req, res) => {
  console.log(JSON.stringify(req.body))
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await pool.query(
      'SELECT * FROM \"Users\" WHERE "Username" = $1 and "Password" = $2;',
      [username, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = result.rows[0];

    console.log(user)

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/register', upload.none(), async (req, res) => {
  const name = req.body.personName;
  const username = req.body.username;
  const password = req.body.password;

  console.log(`name; ${name}`);
  console.log(`username; ${username}`);
  console.log(`password; ${password}`);

  try {
    await pool.query(
      'INSERT INTO \"Users\"("Name", "Username", "Password") VALUES ($1, $2, $3);',
      [name, username, password]
    );

    res.json({ message: 'Account Created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/update', async (req, res) => {
  const { username, bio, instagram } = req.body;
  console.log(req.body);

  try {
    await pool.query(
      'UPDATE \"Users\" SET "Bio" = $2, "Instagram" = $3 WHERE "Username" = $1;',
      [username, bio, instagram]
    );

    res.json({ message: 'Account Updated!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
