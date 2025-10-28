
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname,'data','contacts.db'));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const {name, email, message} = req.body || {};
  if(!name || !email || !message) return res.status(400).json({message:'Missing fields'});
  const stmt = db.prepare('INSERT INTO contacts (name,email,message,created_at) VALUES (?,?,?,CURRENT_TIMESTAMP)');
  stmt.run(name,email,message);
  res.json({message:'Contact saved (local DB)'});
});

app.get('/api/contacts', (req,res)=>{
  const rows = db.prepare('SELECT id,name,email,message,created_at FROM contacts ORDER BY id DESC').all();
  res.json(rows);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Server running on port',PORT));
