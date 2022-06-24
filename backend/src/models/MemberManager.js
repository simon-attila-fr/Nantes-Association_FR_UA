const AbstractManager = require("./AbstractManager");

class MemberManager extends AbstractManager {
  static table = "member";

  findByMail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, name, lastName, email, address, phone, created_at, newsletter from ${this.table}`
    );
  }

  insert(member) {
    return this.connection.query(
      `insert into ${MemberManager.table} (name, lastName, email, address, phone, created_at, newsletter) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        member.name,
        member.lastName,
        member.email,
        member.address,
        member.phone,
        member.created_at,
        member.newsletter,
      ]
    );
  }

  update(member) {
    return this.connection.query(
      `update ${MemberManager.table} set name = ?, lastName = ?, email = ?, address = ?, phone = ?, created_at = ?, newsletter = ? where id = ?`,
      [
        member.name,
        member.lastName,
        member.email,
        member.address,
        member.phone,
        member.created_at,
        member.newsletter,
        member.id,
      ]
    );
  }
}

module.exports = MemberManager;
