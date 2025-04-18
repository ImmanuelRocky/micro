const express = require('express');
const app = express();
const PORT = 3000;

app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: 'Mastering Kubernetes' },
    { id: 2, title: 'Docker Deep Dive' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Book Service running on port ${PORT}`);
});

