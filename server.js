const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API route (for dashboard feature)
app.get('/api/status', (req, res) => {
  res.json({
    status: "Running",
    uptime: Math.floor(process.uptime()),
    time: new Date().toLocaleString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});