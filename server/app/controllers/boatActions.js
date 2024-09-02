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
  const upBoat = {...req.body, 
    id: req.params.id, 
    coord_x: req.body.coord_x, 
    coord_y: req.body.coord_y 
  };

  try{
    await tables.boat.update(upBoat)
    res.sendStatus(204)

  }catch(err){
    next(err)
  }
}

module.exports = {
  browse,
  edit
};
