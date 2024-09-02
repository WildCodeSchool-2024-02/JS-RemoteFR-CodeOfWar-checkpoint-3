/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable camelcase */
const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const { coord_x, coord_y } = req.body;

  try {
    const tile = await tables.tile.readByCoordinates(coord_x, coord_y);
    if (tile.length > 0) {
      return next();
    } else {
      return res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
