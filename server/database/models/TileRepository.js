const AbstractRepository = require("./AbstractRepository");

class TileRepository extends AbstractRepository {
  constructor() {
    super({ table: "tile" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all tiles from the "tile" table
    const [rows] = await this.database.query(
      `select * from ${this.table} order by coord_y, coord_x`
    );

    // Return the array of tiles
    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `select id from ${this.table} where type="island" order by rand() limit 1`
    );

    return rows[0];
  }

  async readByCoordinates(coordX, coordY) {
    if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
      const [tiles] = await this.database.query(
        `select coord_x, coord_y from ${this.table}`
      );
      return [tiles];
    }
    return [];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `update ${this.table} set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [island.id]
    );

    return result;
  }
}

module.exports = TileRepository;
