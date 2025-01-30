const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cardRoutes = require('./routes/cardRoutes');
require('dotenv').config();  // Cargar variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 5001;

// Configurar CORS
const allowedOrigins = ['https://blogeducativo.netlify.app', 'http://localhost:3000', 'http://localhost:5173'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Habilitar credenciales
  optionsSuccessStatus: 200 // Para navegadores legacy
};

app.use(cors(corsOptions));

// Ruta de prueba para verificar CORS
app.get('/test-cors', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://blogeducativo.netlify.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.json({ message: 'CORS is working!' });
});

// Middleware
app.use(bodyParser.json());
app.use('/api', cardRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        // Iniciar el servidor solo si la conexión a MongoDB es exitosa
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });