const AbstractManager = require("./AbstractManager");

class ContentManager extends AbstractManager {
  static table = "content";

  findById(Id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      Id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  update(content) {
    return this.connection.query(
      `update ${ContentManager.table} set body = ? where id = ?`,
      [content.body, content.id]
    );
  }
}

module.exports = ContentManager;
