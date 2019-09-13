require('dotenv').config();
const express = require('express');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('client/public'));

// Routes
app.use('/', authRoutes);
app.use('/', apiRoutes);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});

module.exports = app;
