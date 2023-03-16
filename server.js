const express = require('express');

// Init app server
const app = express();

app.use('/api', require('./routes/api'));

app.listen(3001, () => {
    console.log('Server started!');
});