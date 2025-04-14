const express = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config({ path: '../.env'});
const multer = require('multer');
const upload = multer();

// password encryptions
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const PORT = 3000;

app.use(cors());

// Middleware to handle JSON and x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PostgreSQL pool setup
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Login route with DB check
app.post('/login', upload.none(), async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await pool.query(
      'SELECT \"Password\" FROM \"Users\" WHERE "Username" = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.json({ message: 'User not found' });
    }

    const hashPass = result.rows[0].Password;
    const match = bcrypt.compareSync(password, hashPass);

    if (!match) {
      return res.json({ message: 'Invalid password' });
    }

    if (match)
    {
      const user = result.rows[0];

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '12h' }
    );
    return res.json({ token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

//check for duplicate usernames
app.post('/check-users', upload.none(), async (req, res) => {
  const username = req.body.username;

  try {
    const result = await pool.query(
      'SELECT * FROM \"Users\" WHERE \"Username\" = $1', [username]
    );

    if (result.rowCount >= 1) {
      res.json({ message: 'User already exists!' });
    } else {
      res.json({ message: 'Valid username' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error'});
  }
});


//register
app.post('/register', upload.none(), async (req, res) => {
  const name = req.body.personName;
  const username = req.body.username;
  const password = req.body.password;
  let encryptPass = '';

  bcrypt.hash(password, saltRounds, async function(err, hash) {
    try {
      await pool.query(
        'INSERT INTO \"Users\"("Name", "Username", "Password") VALUES ($1, $2, $3);',
        [name, username, hash]
      );
  
      res.json({ message: 'Account Created' });
    } catch (error) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});
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
