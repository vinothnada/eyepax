const PhotoService = require("../services/PhotoService");

exports.getCarousal = async (req, res) => {
  try {
    const photo = await PhotoService.getCarousal(req.params.id);
    res.json({ data: photo, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};