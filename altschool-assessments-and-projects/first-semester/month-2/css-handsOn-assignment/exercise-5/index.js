const inputElements = document.querySelectorAll('input');

inputElements.forEach( (value, index) => {
  value.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && index !== 6){
      event.preventDefault();

      const next = inputElements[index + 1];
      if (next) {
        next.focus();
      }
    }
  });
});