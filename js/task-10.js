function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxContainer = document.querySelector('#boxes');
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + (10 * i);
    const color = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    boxContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxContainer = document.querySelector('#boxes');
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
}

const controls = document.querySelector('#controls');
controls.addEventListener('click', element => {
  if (element.target.dataset.create) {
    const amount = +document.querySelector('input').value;
    createBoxes(amount);
  } else if (element.target.dataset.destroy) {
    destroyBoxes();
  }
});