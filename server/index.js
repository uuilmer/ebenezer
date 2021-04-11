"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

var path = require("path");

app.use(express["static"](path.join(__dirname, "../dist")));
app.use("/media/", express["static"](path.join(__dirname, "../public/media")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist", "home.html"));
});
app.listen(port);