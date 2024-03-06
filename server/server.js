const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

if (process.env.NODE_ENV === 'production') {
  console.log('In Production');
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'))
  })
}
console.log('In Development');

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.json());


/* Start Server */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;