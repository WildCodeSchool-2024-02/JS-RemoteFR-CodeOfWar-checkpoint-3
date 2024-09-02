const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const sql = `
    SELECT 
      boat.*, 
      tile.type, 
      tile.has_treasure
    FROM 
      boat
    JOIN 
      tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
  `;
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(sql);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const sql = "UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?";
    const [result] = await this.database.execute(sql, [
      boat.coord_x,
      boat.coord_y,
      boat.id,
    ]);
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
