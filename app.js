const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Route 1:(Marketplace UI)
app.get('/', (req, res) => {
  res.render('index');
});

// Route 2: Install → Redirect
app.get('/install', (req, res) => {
  const redirectUrl = 'https://proxy-dev.peax.ch/core-feature-invitation/user-api/v1/onboardings/start?vendor=bexio';
  res.redirect(302, redirectUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Marketplace mock app is running at http://localhost:${PORT}`);
});
