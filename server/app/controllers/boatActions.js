const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const edit = async (req, res, next) => {
  try {
    const boatId = req.params.id;

    const boatUpdate = {
      id: boatId,
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
    };

    const affectedRows = await tables.boat.update(boatUpdate);
    if (affectedRows > 0) {
      res.sendStatus(204);
    } else {
      // Respond with the boats in JSON format
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
