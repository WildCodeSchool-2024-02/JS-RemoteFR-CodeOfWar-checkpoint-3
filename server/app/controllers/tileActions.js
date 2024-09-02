const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tile = await tables.tile.readAll();

    res.json(tile);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
