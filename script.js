
const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const API_BASE = 'http://localhost:4000'; // change to deployed backend URL when live
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {name: form.name.value, email: form.email.value, message: form.message.value};
  try {
    const res = await fetch(API_BASE + '/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const json = await res.json();
    status.textContent = json.message || 'Sent (local)';
    form.reset();
  } catch (err){
    console.error(err);
    status.textContent = 'Could not send — backend not running. Run backend on port 4000.';
  }
});
