const tables = require("../../database/tables");

const coordinates = async (req, res, next) => {
  try {
    const validate = tables.tile.readByCoordinates;
    if (validate) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { coordinates };
