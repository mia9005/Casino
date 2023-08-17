const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, '../client-app')));

app.get('/api/data', (req, res) => {
  const data = require('./items.json');
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});