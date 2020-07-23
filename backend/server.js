const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router/routes')

app.use(router);

app.listen(port, () => {
    console.log('listening on', port);
});