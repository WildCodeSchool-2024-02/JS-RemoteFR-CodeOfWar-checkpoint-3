const tables = require("../../database/tables");

const middleware = async (req, res, next) => {
  try {
    // do something
    const tiles = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );

    if (tiles.length) {
      next();
    } else {
      res.sendStatus(422);
    }

    // with ternary
    // return tiles.length ? next() : res.sendStatus(422);
  } catch (error) {
    next(error);
  }
  // do something
};

module.exports = middleware;
