const Drawing = require('../models/Drawing');

exports.saveDrawing = async (req, res) => {
  const { data } = req.body;

  try {
    const drawing = new Drawing({
      user: req.user._id,
      data,
    });

    const savedDrawing = await drawing.save();
    res.status(201).json(savedDrawing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find({ user: req.user._id });
    res.json(drawings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
