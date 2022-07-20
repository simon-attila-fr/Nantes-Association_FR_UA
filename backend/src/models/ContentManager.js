const AbstractManager = require("./AbstractManager");

class ContentManager extends AbstractManager {
  static table = "content";

  findById(Id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      Id,
    ]);
  }

  findAll() {
    return this.connection.query(
      `select content.*, traduction.ref, traduction.definition, traduction.type  from ${this.table} INNER JOIN traduction on ${this.table}.traduction_id=traduction.id`
    );
  }

  findHome() {
    return this.connection.query(
      `select content.*, traduction.ref, traduction.definition, traduction.type  from ${this.table} INNER JOIN traduction on ${this.table}.traduction_id=traduction.id WHERE traduction.ref LIKE "home_%"`
    );
  }

  findInvolve() {
    return this.connection.query(
      `select content.*, traduction.ref, traduction.definition, traduction.type  from ${this.table} INNER JOIN traduction on ${this.table}.traduction_id=traduction.id WHERE traduction.ref LIKE "involve_%"`
    );
  }

  findOther() {
    return this.connection.query(
      `select content.*, traduction.ref, traduction.definition, traduction.type  from ${this.table} INNER JOIN traduction on ${this.table}.traduction_id=traduction.id WHERE traduction.ref LIKE "other_%"`
    );
  }

  update(content) {
    return this.connection.query(
      `update ${ContentManager.table} set body = ? where id = ?`,
      [content.body, content.id]
    );
  }
}

module.exports = ContentManager;
