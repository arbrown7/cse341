const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/homeController');

// When the user visits "/", call getHome
router.get('/', getHome);

module.exports = router;
