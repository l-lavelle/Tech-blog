// Import dependencies 
const path = require('path');
const express = require('express');
const exphbs= require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
models = require('./models');
const hbs = exphbs.create({});

// Set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Starts the server to begin listening
sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});