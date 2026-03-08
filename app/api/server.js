const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const logger = require('./config/logger');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "SRE Bootcamp API" });
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
