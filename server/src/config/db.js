const Database = require("better-sqlite3");
const db = new Database("./database/crm.sqlite");

console.log("Connected to SQLite");
db.exec(`
    CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    subject TEXT NOT NULL,
    description TEXT,
    status TEXT CHECK(status IN ('active','inactive','pending')) DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `);
console.log("Tickets table ready");
db.exec(`
    CREATE TABLE IF NOT EXISTS notes(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     ticket_id TEXT NOT NULL REFERENCES tickets(ticket_id),
     note_text TEXT NOT NULL,
     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `)
console.log("Notes table ready");
module.exports = db;
