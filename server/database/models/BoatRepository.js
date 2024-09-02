const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  // The U of CRUD - Update operation

  async update(boat) {
    // Execute the SQL UPDATE query to update a specific boat
    const [result] = await this.database.query(
      `update ${this.table} SET
    name = ?,
    coord_x = ?,
    coord_y = ?
WHERE
    id = ?`,
      [boat.name, boat.coord_x, boat.coord_y, boat.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
