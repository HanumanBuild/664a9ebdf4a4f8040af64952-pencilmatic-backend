const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  data: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;
