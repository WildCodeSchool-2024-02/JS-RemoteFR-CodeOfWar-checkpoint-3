const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(boat) {
    const queryParams = [];
    let query = `
      SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure
      FROM ${this.table}
      INNER JOIN tile ON ${this.table}.coord_x = tile.coord_x AND ${this.table}.coord_y = tile.coord_y
    `;
    if (boat && boat.name) {
      query += ` WHERE boat.name = ?`;
      queryParams.push(boat.name);
    }
    const [rows] = await this.database.query(query, queryParams);

    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
