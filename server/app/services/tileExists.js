const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const coordX = tables.tile.coord_x >= 0 && tables.tile.coord_x <= 11;
    const coordY = tables.tile.coord_y >= 0 && tables.tile.coord_y <= 5;

    if (coordX && coordY) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { tileExists };
