const express = require('express');
const cors = require('cors');

// Init app server
const app = express();

// Enable CORS
// app.use(cors());
app.use((req, res, next) => {
    console.log('Middleware CORS atteint');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use('/api', require('./routes/api'));

let server = app.listen(3001, () => {
    console.log(`Server started on port ${server.address().port}!`);
});