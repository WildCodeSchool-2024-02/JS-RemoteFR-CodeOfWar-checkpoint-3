const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.boat.readAll();

    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const boat = {
    ...req.body,
    coord_x: req.body.coord_x,
    coord_y: req.body.coord_y,
    id: req.params.id,
  };

  try {
    await tables.boat.update(boat);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
