import apiRoutes from './server';
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
var db = require("./server/models");

const app = express();

const PORT = process.env.PORT || 8321; // Sets an initial port. We'll use this later in our listener

app.use(logger("dev"));
app.use(bodyParser.json());
console.log("client/build");
app.use(express.static("client/build"));

app.use(apiRoutes);

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", (req, res) => {
    res.sendFile("client/build/index.html", {
        root: __dirname
    });
});

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT: " + PORT);
    });
});