const express = require('express');
const cors = require('cors');
const ngoRoutes = require('./routes/ngos');
const incidentsRoutes = require('./routes/incidents');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/ngos', ngoRoutes);
app.use('/api/incidents', incidentsRoutes);
app.get('/', (req, res) => {
  res.send('Hello')
});

app.listen(3000, () => {
  console.log('Server running at localhost:3000');
});

