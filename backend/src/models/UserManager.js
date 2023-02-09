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
    return this.connection.query(`select id, email, status from ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, status) values (?, ?, ?)`,
      [user.email, user.password, user.status]
    );
  }

  updateEmail(user) {
    return this.connection.query(
      `update ${UserManager.table} set email = ? where id = ?`,
      [user.email, user.id]
    );
  }

  updateStatus(user) {
    return this.connection.query(
      `update ${UserManager.table} set status = ? where id = ?`,
      [user.status, user.id]
    );
  }
}

module.exports = UserManager;
