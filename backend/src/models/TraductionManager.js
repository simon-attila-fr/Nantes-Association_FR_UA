const AbstractManager = require("./AbstractManager");

class TraductionManager extends AbstractManager {
  static table = "traduction";

  findAll() {
    return this.connection.query(
      `SELECT t.id, t.ref, c.body, c.language_code FROM ${this.table} AS t INNER JOIN content AS c ON c.traduction_id = t.id`
    );
  }
}

module.exports = TraductionManager;
