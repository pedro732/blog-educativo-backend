const express = require('express');
const { getCards, createCard, updateCard } = require('../controllers/cardController');

const router = express.Router();

router.get('/cards', getCards);
router.post('/cards', createCard);
router.put('/cards/:id', updateCard); // Nueva ruta para actualizar tarjetas

module.exports = router;