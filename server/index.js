// Import express
const express = require('express')

// Import Body parser
const bodyParser = require('body-parser');

// Import CORS
const cors = require('cors');

// Import Mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Import & Configuring the database
const dbConfig = require('./config/database-config');

// Initialize the app
const app = express()

// Import routes
const apiRoutes = require("./routes/api/posts");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

// Connect to Mongoose and set connection variable
mongoose.connect(dbConfig.url, { useNewUrlParser: true}).then(() => {
    console.log("Successfully connected to the database"); 
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Setup server port
const port = process.env.PORT || 3000;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express!'))

// Launch app to listen to specified port
app.listen(port, () => console.log(`Running Application Server on port ${port}!`))



// Use Api routes in the App
app.use('/api', apiRoutes);