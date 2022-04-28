// all of our requires?

const express = require("express");
const morgan = require("morgan");
// const router = require("router");
const layout = require("./views/layout");

const { db } = require("./models");
const userRouter = require("./routes/users");
const app = express();

app.use("/wiki", require("./routes/wiki"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => res.send(layout("")));
// app.use("/posts", router);

db.authenticate().then(() => {
  console.log("connected to the database HELLO");
});
const init = async () => {
  await db.sync({ force: true });
  const PORT = 3000; //might need to change for psql

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
