'use strict';
const date = require('date-and-time')

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  var now = new Date();
  var nowFormatted = date.format(now, "YYYY/MM/DD HH:mm:ss");
  
  var responseText = `<h1 style="color:red;">Java Home App - version-11!!</h1> <br> started @: ${nowFormatted}`;
  
  res.send(responseText);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
