const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  static table = "photo";

  findById(Id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      Id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update({ image, info }) {
    return this.connection.query(
      `update ${PhotoManager.table} set photo_name = ?, photo_url = ?,  where id = ?`,
      [info.name, image, info.id]
    );
  }
}

module.exports = PhotoManager;
