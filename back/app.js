var express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
app.options("*", cors());

const mongoUtils = require("./mongo");
mongoUtils.runMongo().catch(console.dir);

const usersRoutes = require("./routes/users");
const postsRoutes = require("./routes/posts");
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

const hostname = "127.0.0.1";
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
