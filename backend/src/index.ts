import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Define the port to run on

app.use(express.json()); // Middleware to parse JSON bodies

// Define a route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
