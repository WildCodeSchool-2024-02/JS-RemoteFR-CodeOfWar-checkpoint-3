const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update({ id, coordX, coordY }) {
    const [result] = await this.database.query(
      `UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );
    return result;
  }
}

module.exports = BoatRepository;
