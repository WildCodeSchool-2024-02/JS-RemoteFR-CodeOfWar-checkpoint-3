const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();

    res.json(tiles);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
