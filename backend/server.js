// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const subjectsRouter = require('./routes/subjects');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hemant122:hemant55@cluster0.rx7tfag.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mount subjects routes
app.use('/subjects', subjectsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
