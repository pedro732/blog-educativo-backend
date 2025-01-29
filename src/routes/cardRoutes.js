const express = require('express');
const { getCards, createCard, updateCard, deleteCard } = require('../controllers/cardController');

const router = express.Router();

router.get('/cards', getCards);
router.post('/cards', createCard);
router.put('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);

module.exports = router;