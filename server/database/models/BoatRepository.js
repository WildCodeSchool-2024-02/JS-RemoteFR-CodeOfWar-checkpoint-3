/* eslint-disable consistent-return */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    try {
    const query = `SELECT 
        boat.id, 
        boat.name, 
        boat.coord_x, 
        boat.coord_y, 
        tile.id, 
        tile.coord_x, 
        tile.coord_y, 
        tile.type, 
        tile.has_treasure
      FROM ${this.table}
      LEFT JOIN tile ON boat.id = tile.id
      ${where ? 'WHERE boat.name LIKE ?' : ''}
      ORDER BY boat.coord_y, boat.coord_x`;

    const search = where ? [`%${where}%`] : [];

    const [rows] = await this.database.query(query, search);
    
    // Return the array of boats
    return rows;
    } catch (err) {
      console.error(err)
    }
  }

  async update(boat) {
    const [result] = await this.database.execute(`UPDATE ${this.table} SET coord_x=?, coord_y=? where id=?`, [boat.coord_x, boat.coord_y, boat.id]);
    return result.affectedRows
  }
}

module.exports = BoatRepository;
