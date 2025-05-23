function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const date = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
  document.getElementById('day').textContent = day;
}

setInterval(updateClock, 1000);
updateClock(); // Call once immediately
