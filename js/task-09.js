function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');
button.addEventListener('click', function() {
  const body = document.querySelector('body');
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});
