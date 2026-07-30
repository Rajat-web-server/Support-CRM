const db = require("../config/db");

function insertTicket(
  ticket_id,
  customer_name,
  customer_email,
  subject,
  description,
) {
  const Ticket = db.prepare(
    `INSERT INTO tickets(ticket_id,customer_name,customer_email,subject, description)VALUES(?,?,?,?,?)`,
  );
  return Ticket.run(
    ticket_id,
    customer_name,
    customer_email,
    subject,
    description,
  );
}

function getAllTickets(filters = {}) {
  const { status, search } = filters;

  let query = `SELECT * FROM tickets WHERE 1=1`;
  let params = [];

  if (status) {
    query += ` AND status = ?`;
    params.push(status);
  }
  if (search) {
    query += `AND (customer_name LIKE ? OR subject LIKE ?)`;
    params.push(`%${search}%,%${search}%`);
  }

  const Ticket = db.prepare(query);
  return Ticket.all(...params);
  // const Ticket = db.prepare(`SELECT * FROM tickets`);
  // return Ticket.all();
}
function getTicketById(ticket_id) {
  const Ticket = db.prepare(`SELECT *  FROM tickets WHERE ticket_id=?`);
  return Ticket.get(ticket_id);
}
function updateTicket(ticket_id, subject, description, status) {
  const Ticket = db.prepare(`  UPDATE tickets
    SET subject = ?, description = ?, status = ?
    WHERE ticket_id = ?`);
  return Ticket.run(subject, description, status, ticket_id);
}
function deleteTicket(ticket_id) {
  const Ticket = db.prepare(`
        DELETE FROM  tickets WHERE ticket_id=?
        `);
  return Ticket.run(ticket_id);
}

module.exports = {
  insertTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
