const tables = require('../../database/tables');

// const browse = async (req, res, next) => {
//     try {
//         // Fetch all tiles from the database
//         const tiles = await tables.tile.readAll();

//         // Respond with the tiles in JSON format
//         res.json(tiles);
//     } catch (err) {
//         // Pass any errors to the error-handling middleware
//         next(err);
//     }
// };

const tileExists = async (req, res, next) => {

    const tiles = await tables.tile.readByCoordinates(req.coord_x, req.coord_y);
    try {

        if (tiles.length > 0) {
            next();
        } else {
            res.status(422).json('coordonnées invalides');
        }
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
}

module.exports = tileExists;
