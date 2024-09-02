const tileExist = (req, res, next) => {
  if (!req.body.coord_x && !req.body.coord_y) {
    next();
  } else if (req.body.coord_x || req.body.coord_y) {
    res.sendStatus(422);
  }
};

module.exports = tileExist;
