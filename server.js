const express = require('express');
const cors = require('cors');

// Init app server
const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());
app.use('/api', require('./routes/api'));

let server = app.listen(3001, () => {
    console.log(`Server started on port ${server.address().port}!`);
});