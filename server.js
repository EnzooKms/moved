const express = require("express");
const app = express();
const port = 5173;

app.use(express.static(__dirname));

app.get("/fun", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Running on :  http://localhost:${port}`);
});
