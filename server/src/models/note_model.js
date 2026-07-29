const db = require("../config/db");

function insertNote(ticket_id, note_text) {
  const Note = db.prepare(
    `INSERT INTO notes(ticket_id, note_text) VALUES(?, ?)`,
  );
  return Note.run(ticket_id, note_text);
}

function getNotesByTicketId(ticket_id) {
  const Note = db.prepare(`SELECT * FROM notes WHERE ticket_id = ?`);
  return Note.all(ticket_id);
}

module.exports = {
  insertNote,
  getNotesByTicketId,
};