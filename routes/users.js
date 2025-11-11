const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/profile', (req, res) => {
  fs.readFile(path.join(__dirname, '../user.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server Error' });
    res.type('application/json').send(data);
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(path.join(__dirname, '../user.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server Error' });

    const user = JSON.parse(data);

    if (username !== user.username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }
    if (password !== user.password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }

    res.json({ status: true, message: 'User Is valid' });
  });
});

router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logout.</b>`);
});

module.exports = router;