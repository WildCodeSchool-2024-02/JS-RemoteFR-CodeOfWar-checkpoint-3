const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();
    res.status(200).json(tiles);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
