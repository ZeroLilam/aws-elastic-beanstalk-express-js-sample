const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! CHANGE THE WORLD1234567890'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
