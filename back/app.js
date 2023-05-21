var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const usersRoutes = require('./routes/users')

const mongoUtils = require('./mongo')
mongoUtils.runMongo().catch(console.dir);
app.use('/users', usersRoutes)

const hostname = '127.0.0.1';
const port = 8080;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});