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
      `update ${PhotoManager.table} set photo_name = ?, photo_url = ?, updated_at = STR_TO_DATE(?, '%d/%m/%Y'), description = ?  where id = ?`,
      [
        photo.photo_name,
        photo.photo_url,
        photo.updated_at,
        photo.description,
        photo.id,
      ]
    );
  }
}

module.exports = PhotoManager;
