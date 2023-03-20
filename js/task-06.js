const input = document.querySelector('#validation-input');
input.addEventListener('blur', handleInputBlur);
function handleInputBlur() {
  const dataLength = Number(input.dataset.length);
  const inputLength = input.value.length;
  if (inputLength === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}