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

  update(photo) {
    return this.connection.query(
      `update ${PhotoManager.table} set photo_name = ?, photo_url = ?  where id = ?`,
      [photo.photo_name, photo.photo_url, photo.id]
    );
  }
}

module.exports = PhotoManager;
