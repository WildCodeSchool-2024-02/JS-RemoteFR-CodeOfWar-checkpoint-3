const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();
    if (tiles == null) {
      res.sendStatus(404);
    } else {
      res.json(tiles);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
