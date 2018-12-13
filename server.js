const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function (req, res) {
  console.log(`listening on port ${app.get('port')}`);
});