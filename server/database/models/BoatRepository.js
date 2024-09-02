const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure from ${this.table} INNER JOIN tile ON ${this.table}.coord_y = tile.coord_y AND ${this.table}.coord_x = tile.coord_x`);

    // Return the array of boats
    return rows;
  }
  
  async update(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x= ?, coord_y= ? where id= ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return result.affectedRows;
  }


}

module.exports = BoatRepository;
