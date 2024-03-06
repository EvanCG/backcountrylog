const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// uncomment the below for proxy challenge

const leaderList = [
  {name: 'Anna', id: 'a0'},
  {name: 'Ben', id: 'b0'},
  {name: 'Clara', id: 'c0'},
  {name: 'David', id: 'd0'},
];

app.get('/api/leaders', (req, res) => {
  return res.status(200).send(leaderList);
});





app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}: http://localhost:${port}/`)
);