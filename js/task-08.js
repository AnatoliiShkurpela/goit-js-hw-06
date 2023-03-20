const form = document.querySelector('.login-form');
form.addEventListener('submit', element => {
  element.preventDefault();
  const formData = {};
  for (let element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (Object.values(formData).includes('')) {
    alert('Всі поля мають бути заповнені!');
  } else {
    console.log(formData);
    form.reset();
  }
});

