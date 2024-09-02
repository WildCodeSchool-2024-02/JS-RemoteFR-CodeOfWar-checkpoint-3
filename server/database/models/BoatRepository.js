const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`SELECT 
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
      ORDER BY boat.coord_y, boat.coord_x`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.execute(`UPDATE ${this.table} SET coord_x=?, coord_y=? where id=?`, [boat.coord_x, boat.coord_y, boat.id]);
    return result.affectedRows
  }
}

module.exports = BoatRepository;
