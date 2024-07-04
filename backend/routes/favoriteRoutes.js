const express = require('express');
const { addFavorite, getFavorites, deleteFavorite } = require('../controllers/favoriteController.js');
const protect = require('../middlewares/authMiddleware.js');
const router = express.Router();

router.post('/', protect, addFavorite);
router.get('/', protect, getFavorites);
router.delete('/:id', protect, deleteFavorite);

module.exports = router;
