const tables = require('../../database/tables');

const tileExists = async(req, res , next) => {
    const coordX = req.body.coord_x;
    const coordY = req.body.coord_y;

    const tileXY = await tables.tile.readByCoordinates(coordX, coordY);

    if(tileXY.length === 0){
        res.sendStatus(422)
    }else{
        next()
    }
};

module.exports = tileExists;
