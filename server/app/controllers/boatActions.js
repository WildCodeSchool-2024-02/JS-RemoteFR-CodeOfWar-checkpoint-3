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
    const { id } = req.params;
    const { coord_x: coordX, coord_y: coordY } = req.body;
    await tables.boat.update({id, coord_x: coordX, coord_y: coordY });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit
};
