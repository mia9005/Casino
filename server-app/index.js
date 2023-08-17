const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//Host static client files
app.use(express.static(path.join(__dirname, '../client-app')));
//Get JSON file and response in JSON type
app.get('/api/data', (req, res) => {
  const data = require('./items.json');
  res.json(data);
});

// execute app in 3000 port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});