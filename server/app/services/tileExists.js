const tileExist = (req, res, next) => {
  console.info(req.body);
  if (!req.body.coord_x && !req.body.coord_y) {
    next();
  } else if (req.body.coord_x || req.body.coord_y) {
    res.sendStatus(422);
  }
};

module.exports = tileExist;
