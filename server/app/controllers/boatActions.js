/* eslint-disable camelcase */
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
  const { id } = req.params;
  const { coord_x, coord_y } = req.body;
  try {
    const affectedRows = await tables.boat.update({ id, coord_x, coord_y });
    if (affectedRows > 0) {
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
