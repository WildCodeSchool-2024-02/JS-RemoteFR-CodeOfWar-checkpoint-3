const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select 
boat.id, 
boat.name, 
boat.coord_x, 
boat.coord_y, 
tile.type, 
tile.has_treasure 
from ${this.table} 
inner join tile on boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y`);

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
