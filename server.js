const express = require('express');
const cors = require('cors');
const hospitalRoutes = require('./routes/hospital');
const departmentRoutes = require('./routes/department');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('hospital hanagement server backend is running');
});

// TODO: Add routes here
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/departments', departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
