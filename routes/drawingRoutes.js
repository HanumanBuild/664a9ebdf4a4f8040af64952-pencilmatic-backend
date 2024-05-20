const express = require('express');
const { saveDrawing, getDrawings } = require('../controllers/drawingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, saveDrawing).get(protect, getDrawings);

module.exports = router;
