
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname,'data','contacts.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`);
console.log('DB initialized at data/contacts.db');
