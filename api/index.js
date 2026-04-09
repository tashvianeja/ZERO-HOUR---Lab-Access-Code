const express = require("express");

const app = express();

const successMessage = `✅ AUTHORIZATION VERIFIED
Node-17 relay restored successfully.

Authentication fragments accepted by antidote lab entrance system.

🔓 LAB ACCESS GRANTED
Proceed inside immediately. Survivors are counting on you.`;

const errorMessage = `❌ AUTHORIZATION FAILED
Relay authentication sequence rejected.

Signal instability still detected in Node-17 packet stream.
Re-evaluate the restored packets and try again.`;

app.use(express.json());

app.post("/api/authorize", (req, res) => {
  const code = String(req.body?.code ?? "").trim().toUpperCase();

  if (code === "B7F0") {
    return res.json({ ok: true, message: successMessage });
  }

  return res.json({ ok: false, message: errorMessage });
});

module.exports = app;