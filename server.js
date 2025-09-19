const express = require('express');
const app = express();
const homeRoute = require('./routes/home');

app.use('/', homeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
