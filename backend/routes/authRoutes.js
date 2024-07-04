const express = require('express');
const { registerUser, authUser, getProfile } = require('../controllers/authController.js');
const protect = require('../middlewares/authMiddleware.js');
const router = express.Router();

router.get('/', protect, getProfile)
router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;
