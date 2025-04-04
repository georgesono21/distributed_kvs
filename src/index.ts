import express from "express";
import KeyValueStore from "./kvs.js";
const app = express();
const PORT = 4000;

const kvStore = new KeyValueStore();
app.use(express.json());
// GET request
app.get("/", (req, res) => {
	console.log(`GET: ${kvStore.print()}`);
	res.send(kvStore.print())
});

// POST request
app.post("/", (req, res) => {
	console.log(`POST: ${req.body}`);
	const key = req.body.key;
    const value = req.body.value;
    kvStore.set(key, value);
	res.send("Data received successfully!");
});

// PUT request
app.put("/data/:id", (req, res) => {
	const id = req.params.id;
	res.send(`Data with ID ${id} updated successfully!`);
});

// DELETE request
app.delete("/data/:id", (req, res) => {
	const id = req.params.id;
	res.send(`Data with ID ${id} deleted successfully!`);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
