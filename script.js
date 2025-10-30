document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name')?.value || 'Friend';
  alert(`Thanks, ${name}! This is a demo form — no message was sent.`);
  e.target.reset();
});

// Optional: clicking a gallery image opens it in a new tab for a quick preview
document.querySelectorAll('#gallery img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
