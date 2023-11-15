const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* GET welcome page in html with blue color. */
app.get("/bienvenida", function (req, res, next) {
  res.send("<h1 style='color:blue'>Bienvenido a mi página</h1>");
});

/* GET users listing. */
app.get("/usuario", function (req, res, next) {
  res.send({ nombre: "Rocio", apellido: "Cabrera", edad: 31, correo: "rocioevelincabrera@gmail.com" });
});

// server listening on port 8080
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

module.exports = app;
