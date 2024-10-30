const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views')); 

const routes = require('./Routes/Index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});