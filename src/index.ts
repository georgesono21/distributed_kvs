import express from 'express';
const app = express();
const PORT = 4000;

// GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST request
app.post('/data', (req, res) => {
  res.send('Data received successfully!');
});

// PUT request
app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Data with ID ${id} updated successfully!`);
});

// DELETE request
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Data with ID ${id} deleted successfully!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
