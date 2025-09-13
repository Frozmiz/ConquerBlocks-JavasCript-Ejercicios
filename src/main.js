import "./scss/main.scss";

// Animacion super innecesaria, pero que tenia que hacer.
document.querySelectorAll('p > span').forEach(span => {
  const text = span.textContent || '';
  span.textContent = '';
  text.split('').forEach((ch, i) => {
    const s = document.createElement('span');
    s.className = 'letter';
    s.style.setProperty('--i', i);
    s.textContent = ch === ' ' ? '\u00A0' : ch;
    span.appendChild(s);
  });
});