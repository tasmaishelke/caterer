module.exports = (req, res, next) => {
  const { name, location, pricePerPlate, cuisines, rating } = req.body;

  if (
    !name ||
    !location ||
    !pricePerPlate ||
    !Array.isArray(cuisines) ||
    rating === undefined
  ) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (pricePerPlate <= 0) {
    return res.status(400).json({
      message: "Price must be greater than 0",
    });
  }

  if (rating < 0 || rating > 5) {
    return res.status(400).json({
      message: "Rating must be between 0 and 5",
    });
  }

  next();
};
