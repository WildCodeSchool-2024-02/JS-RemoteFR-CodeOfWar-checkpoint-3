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
    const rowsUpdated = await tables.boat.update({
      id: req.params.id,
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
    });

    if (rowsUpdated > 0) {
      res.status(204).json({ message: "Boat updated successfully" });
    } else {
      res.status(404).json({ message: "Boat not found" });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  edit,
};
