// Dark Mode Toggle
const button = document.getElementById('toggleDarkMode');
button.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
};

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Autosave
const textarea = document.getElementById('editor');
textarea.value = localStorage.getItem('note') || '';

textarea.addEventListener('input', () => {
  localStorage.setItem('note', textarea.value);
});

// Download Button
document.getElementById('downloadBtn').onclick = () => {
  const blob = new Blob([textarea.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'blankly-note.txt';
  a.click();
  URL.revokeObjectURL(url);
};