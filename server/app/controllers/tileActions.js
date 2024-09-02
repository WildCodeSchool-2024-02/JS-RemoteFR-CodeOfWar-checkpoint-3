const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.tile.readAll();
    res.status(200).json(boats);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
