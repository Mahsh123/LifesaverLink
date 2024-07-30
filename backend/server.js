const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const donorsRouter = require('./routes/donors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lifesaverlink', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/donors', donorsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
