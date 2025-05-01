const express = require('express');
const cors = require("cors"); // Import cors
require('dotenv').config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests from your frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};
const port = process.env.PORT || 3000;

app.use(cors(corsOptions)); // Enable CORS with the specified options
app.use(express.json());

app.use('/store', require('./src/routes/store.route'));
app.use('/user', require('./src/routes/user.route'));
app.use('/item', require('./src/routes/item.route'));
app.use('/transaction', require('./src/routes/transaction.route'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});