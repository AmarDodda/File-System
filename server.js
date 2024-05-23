const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const FILE_DIR = path.join(__dirname, 'files');

// Ensure the directory exists
if (!fs.existsSync(FILE_DIR)) {
  fs.mkdirSync(FILE_DIR);
}

// Endpoint to create a text file with the current timestamp
app.post('/create-file', (req, res) => {
  console.log('Received request to create file');
  const timestamp = new Date();
  const filename = `${timestamp.toISOString().replace(/:/g, '-')}.txt`;
  const filepath = path.join(FILE_DIR, filename);
  const content = timestamp.toString();

  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.error('Error creating file', err);
      return res.status(500).send('Error creating file');
    }
    console.log(`File created: ${filename}`);
    res.status(200).send(`File created: ${filename}`);
  });
});

// Endpoint to retrieve all text files in the directory
app.get('/files', (req, res) => {
  console.log('Received request to list files');
  fs.readdir(FILE_DIR, (err, files) => {
    if (err) {
      console.error('Error reading directory', err);
      return res.status(500).send('Error reading directory');
    }
    const textFiles = files.filter(file => path.extname(file) === '.txt');
    console.log('Files retrieved:', textFiles);
    res.status(200).json(textFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
