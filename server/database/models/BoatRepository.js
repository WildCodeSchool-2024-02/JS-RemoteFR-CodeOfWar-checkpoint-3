const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    const name = where && "name" in where ? where.name : "";
    let query = `
    SELECT 
      boat.id AS id,
      boat.name AS name,
      boat.coord_x AS coord_x,
      boat.coord_y AS coord_y,
      tile.type AS type,
      tile.has_treasure AS has_treasure
    FROM ${this.table}
    INNER JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
  `;
  
  const params = [];

  if (name) {
    query += ' WHERE boat.name = ?';
    params.push(name);
  }

  // Execute the SQL SELECT query
  const [rows] = await this.database.query(query, params);
  
  // Return the array of boats
  return rows;
  }

  async update(boat) {
    const { coord_x: x, coord_y: y, id } = boat;
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [x, y, id]
    );
    return row.affectedRows;
  }
}

module.exports = BoatRepository;
