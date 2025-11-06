import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve the site directory
const siteRoot = path.join(__dirname, 'Stran www');
app.use(express.static(siteRoot, { index: 'index.html', extensions: ['html'] }));

// Fallback to index for root
app.get('/', (req, res) => {
  res.sendFile(path.join(siteRoot, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  // Open browser shortly after start
  setTimeout(() => open(`http://localhost:${port}`), 300);
});



