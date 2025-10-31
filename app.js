import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>OTOKALI AGENT</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f8f8f8;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
          }
          h1 { color: #222; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <h1>🤖 OTOKALI AGENT</h1>
        <p>Your AI assistant is online.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Running on port ${PORT}`);
});
