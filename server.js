const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const now = new Date();
  const buildTime = now.toLocaleString("es-EC", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  res.render("index", { buildTime });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
