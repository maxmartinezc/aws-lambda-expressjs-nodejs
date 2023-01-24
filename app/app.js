const express = require('express');
const serverless = require('serverless-http');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/v1/hello', (req, res) => {
  res.send({ app: 'aws-lambda-expressjs-nodejs', version: '1.0.0' });
});

if (process.env.APP_ENV === 'local') {
  app.listen(port, () => console.log(`Listening on: ${port}`));
} else {
  module.exports.handler = serverless(app);
}