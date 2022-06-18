const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findByMail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(`select id, email from ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set email = ?, password = ?, where id = ?`,
      [user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
