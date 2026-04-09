const express = require("express");
const path = require("path");

const app = require("./api/index");
const PORT = process.env.PORT || 3000;

// Local development only: serve static files from project root.
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Local server running at http://localhost:${PORT}`);
});