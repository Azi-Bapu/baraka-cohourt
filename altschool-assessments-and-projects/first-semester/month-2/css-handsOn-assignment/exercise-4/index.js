const inputElements = document.querySelectorAll('.form__input');

inputElements.forEach( (value, index) => {
  value.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'  && index !== 8){
      event.preventDefault();

      const next = inputElements[index + 1];
      if (next) {
        next.focus();
      }
    }
  });
});