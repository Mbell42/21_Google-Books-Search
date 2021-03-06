// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");


// Setup Express
const app = express();
const PORT = process.env.PORT || 4242;


// Middleware
app.use(
    express.urlencoded({
        extended: true 
    })
);
app.use(
    express.json()
);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

// Routes - front-end / API 
app.use(routes);


// Database connection / configuration
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/google-books-search";

mongoose.connect(
    MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB Successfully!"))
  .catch(err => console.log(err));


// Start the back-end server
app.listen(PORT, () => {
    console.log(`Server is now listening on PORT ${PORT}!`);
});

