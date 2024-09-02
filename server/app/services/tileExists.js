const TileRepository = require("../../database/models/TileRepository");

const tileRepository = new TileRepository();

const tileExists = async (req, res, next) => {
  /* eslint-disable camelcase */
  const { coord_x, coord_y } = req.body;
  /* eslint-disable camelcase */
  if (coord_x < 0 || coord_x > 11 || coord_y < 0 || coord_y > 5) {
    return res.sendStatus(422);
  }

  try {
    const tile = await tileRepository.readByCoordinates(coord_x, coord_y);

    if (!tile) {
      return res.sendStatus(422);
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = tileExists;
