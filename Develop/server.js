const express = require('express');
const routes = require('./routes');
//importing connection to Sequelize from config/connection.js
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//Sequelize taking the models and connecting them to associated database tables
//if it doesn't find a table it will create it for you
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});