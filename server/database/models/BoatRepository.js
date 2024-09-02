const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

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
