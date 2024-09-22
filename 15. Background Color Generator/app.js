const btn = document.querySelector('.btn');
const hex = document.getElementById('hexColor');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomColor() {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  hex.textContent = randomColor;
}
btn.addEventListener('click', randomColor);
