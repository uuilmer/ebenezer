const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));
app.use("/media/", express.static(path.join(__dirname, "../public/media")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "home.html"));
});

app.listen(port);
