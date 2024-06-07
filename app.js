require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const connectdb = require('./server/config/db');
const app = express();
const port = process.env.PORT || 5000;




// connect to the data base 
connectdb();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

// Define the routes
const mainRoutes = require('./server/routes/main');
app.use('/', mainRoutes);


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
