// all of our requires?

const express = require("express");
const morgan = require("morgan");
const router = require("router");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => res.redirect("/posts"));
app.use("/posts", router);

const PORT = process.env.PORT || 3000; //might need to change for psql

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

module.exports = {};
