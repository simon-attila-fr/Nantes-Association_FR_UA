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
      `select id, name, lastName, email, address, phone, cotisation, newsletter from ${this.table}`
    );
  }

  insert(member) {
    return this.connection.query(
      `insert into ${MemberManager.table} (name, lastName, email, address, phone, cotisation, newsletter) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        member.name,
        member.lastName,
        member.email,
        member.address,
        member.phone,
        member.cotisation,
        member.newsletter,
      ]
    );
  }

  update(member) {
    return this.connection.query(
      `update ${MemberManager.table} set name = ?, lastName = ?, email = ?, address = ?, phone = ?, cotisation = ?, newsletter = ? where id = ?`,
      [
        member.name,
        member.lastName,
        member.email,
        member.address,
        member.phone,
        member.cotisation,
        member.newsletter,
        member.id,
      ]
    );
  }
}

module.exports = MemberManager;
