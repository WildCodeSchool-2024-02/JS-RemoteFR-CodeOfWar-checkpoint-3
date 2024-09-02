const tables = require("../../database/tables")

const tileExist = async (req, res, next) => {
  const { coordX, coordY } = req.body;
  if (coordX < 0 || coordX > 11 || coordY < 0 || coordY > 5) {
    return res.sendStatus(422)
  }

  try {
    const tiles = await tables.tile.readByCoordinates(coordX, coordY);

    if (tiles.length === 0) {
      return res.status(404).send({ error: 'Tuile non trouve' });
    }
    return next();
  } catch (err) {
    return next(err)
  }
}

module.exports = tileExist;
