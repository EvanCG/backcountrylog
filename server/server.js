const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Handle parsing request body
app.use(express.json());

/* Attempting to change filepath locations if the request is production vs development */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));
} else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}

/* THIS CODE IS TO TEST THAT THE SERVER IS WORKING */
const leaderList = [
  {name: 'Anna', id: 'a0'},
  {name: 'Ben', id: 'b0'},
  {name: 'Clara', id: 'c0'},
  {name: 'David', id: 'd0'},
];

app.get('/api/leaders', (req, res) => {
  return res.status(200).send(leaderList);
});



app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './index.html'));
});

/* Catch-all route handler */
app.use((req, res) => res.status(404).send('This page can\'t be found'));



/* Global error hander */
app.use((err, req, res, next) => {
  console.log('----> We are in the global error handler <----');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}: http://localhost:${port}/`)
);