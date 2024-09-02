const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const coordoX = req.body.coord_x;
  const coordoY = req.body.coord_y;
  const tile = await tables.tile.readByCoordinates(coordoX, coordoY);
 
  // eslint-disable-next-line no-unused-expressions
  tile.length === 0 ? res.sendStatus(422) : next();
  
}
module.exports = tileExists;
