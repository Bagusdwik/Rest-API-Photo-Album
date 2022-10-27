const express = require('express');
const app = express();
const router = require('./routers')
require('dotenv').config();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false }))

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_PORT}`);
})