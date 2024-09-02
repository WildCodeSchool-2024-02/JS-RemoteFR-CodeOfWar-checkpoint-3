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

const updateBoatAction = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  try {
    const id = parseInt(req.params.id, 10);

    if (!id || coordX === undefined || coordY === undefined) {
      return res
        .status(400)
        .json({ error: "ID, coord_x, and coord_y are required" });
    }

    const result = await tables.boat.update({
      id,
      coord_x: coordX,
      coord_y: coordY,
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Boat not found" });
    }

    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  browse,
  updateBoatAction,
};
