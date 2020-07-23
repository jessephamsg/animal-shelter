const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router/routes');
const db = require('./db/db')

app.use(router);
db.connect();

app.listen(port, () => {
    console.log('listening on', port);
});