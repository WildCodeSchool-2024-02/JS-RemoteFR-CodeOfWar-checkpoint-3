// module.exports = null;
const TileRepository = require("../../database/models/TileRepository");

const tileRepository = new TileRepository();

const tileExists = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;

  if (coordX < 0 || coordX > 11 || coordY < 0 || coordY > 5) {
    return res.sendStatus(422);
  }

  try {
    const tiles = await tileRepository.readByCoordinates(coordX, coordY);
    if (tiles.length > 0) {
      return next();
    }
    return res.sendStatus(422);
  } catch (error) {
    console.error("Error checking tile existence:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = tileExists;
