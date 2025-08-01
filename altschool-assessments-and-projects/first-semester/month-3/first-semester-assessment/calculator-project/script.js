let expression = '';
let historyStrings = '';
let recentHistory = [];
let fullHistory = [];
const validKeys = [0,1,2,3,4,5,6,7,8,9,'x','÷','+','-','%','^','.','c','h','C','H'];
const buttonElement = document.querySelectorAll('button');
const screenElement = document.querySelector('.screen');
const historyElement = document.querySelector('.text-area');



/*Inputing values using click event*/
buttonElement.forEach(( value ) => {

  
  value.addEventListener( 'click', () => {
    calculator(value.innerHTML);
  });

});

/*Inputing values using the keydown event*/
document.addEventListener( 'keydown', (event) => {
  console.log(event.key);
  if('Backspace' == event.key){
    calculator('⌫');
  } else if(('=' == event.key) || ('Enter' == event.key)){
    event.preventDefault();
    calculator('=');
  } else if('/' == event.key){
    event.preventDefault();
    calculator('÷');
  } else {
      for(let value of validKeys){
        if(value == event.key){
          calculator(event.key);
        }
      }
    }
});

// How to properly delete and why isn't the keydown working from the onset
function calculator(input){
  // Assign operators correctly 
  switch(input){
    case 'x':
      input = ' * ';
      break;

    case '÷':
      input = ' / ';
      break;

    case '+':
      input = ' + ';
      break;

    case '-':
      input = ' - ';
      break;

    case '%':
      input = ' % ';
      break;

    case '^':
      input = ' ** ';
      break;

    case 'c':
      input = 'C';
      break;

    case 'h':
      input = 'H';
      break;

    case 'C':
      input = 'C';
      break;

    case 'H':
      input = 'H';
      break;

    default:
      break;
  }
  // Receive input and evaluate
  switch (input){

    case '=':
      // Evaluate the strings and render on screen
      if(expression !== ''){
        let result =  eval(expression).toFixed(4);
      screenElement.innerHTML = `${expression} = ${result}`;
      fullHistory.push(`${expression} = ${result}`);              

      // Render 3 recent expression
      if(fullHistory.length < 4){                                 
        renderHistory(fullHistory);
      } else {
        for(let i = (fullHistory.length - 3); i < fullHistory.length; i++){  
        recentHistory.push(fullHistory[i]);
      }
      renderHistory(recentHistory)
      // Reassign recent expression array to be empty
      recentHistory = [];
      }
      expression = '';
      break;
      }
    case 'C' :
      // Clear current expression by reassigning string to be empty
      expression = '';
      screenElement.innerHTML = expression;
      break;

    case '⌫':
      // Delete previous character 
      if(expression[(expression.length - 1)] === ' '){
        expression = expression.slice(0, -3);
        screenElement.innerHTML = expression;
        break;
      } else{
          expression = expression.slice(0, -1);
          screenElement.innerHTML = expression;
          break;
      }  
    case 'H':
      // Display full history of expressions
      renderHistory(fullHistory);
      break;

    case 'Clear History':
      // Clear history
      fullHistory = [];
      renderHistory(fullHistory);
      break;

    default:
      // Inputting expressions 
      expression += input;
      screenElement.innerHTML = expression;
      break;

  }

}

// Displaying previous arithmetric expressions and results
function renderHistory(history){
  historyStrings = '';
  for(let value of history){
    historyStrings += `<li>${value}</li>`;
  }
  historyElement.innerHTML = historyStrings;
}