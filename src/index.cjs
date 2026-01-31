const express = require('express');
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Spotz!' });
});

// Start server and log URL
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server listening at ${url}`);
});
