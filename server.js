const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve the game at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'the-forgotten-archive.html'));
});

// API endpoint for game stats (can be expanded)
app.get('/api/status', (req, res) => {
  res.json({
    version: '1.0.0',
    game: 'The Forgotten Archive',
    status: 'running'
  });
});

app.listen(PORT, () => {
  console.log(`🎮 The Forgotten Archive running at http://localhost:${PORT}`);
  console.log(`   Game: http://localhost:${PORT}/`);
});