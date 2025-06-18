let loginStatus;
let idGrantedAccess;
const dataBase = [ {username:'emma', password: 'sssssss', id: 'id1'}, {username:'epemu', password: 'sssssss', id: 'id2'} ];
const userDetails = {
  "id1": { "First Name": 'Emmanuel', "Last Name": 'Epemu' },
  "id2": { "First Name": 'Dan', "Last Name": 'Ojo' }
};


logIn();


function logIn(){
  
  /*Get User details*/
  const name = prompt('Username here');
  const password = prompt('Password here');
  const confirm = prompt('Confirm Password here');

  /*Cross check with input criterias*/
  const inputPattern = patternRecognition(name, password, confirm);
  console.log(`Input Pattern is ${inputPattern}`);

  if (inputPattern){
    /*Cross check with database*/
    console.log(`Unchecked --- ${loginStatus}`);
    checkDataBase(name, password);
    console.log(`Checked --- ${JSON.stringify(loginStatus)}`);

    /*Display*/
    renderStatus();
  }else {
    alert('Invalid login');
  }
  
}

function patternRecognition(name, password, confirm){
  
  const namePattern = /^.{1,9}$/ ;
  const pwordPattern = /^.{7,}$/ ;
  
  if(namePattern.test(name) && pwordPattern.test(password)) {
    if(confirm === password){
      return true;
    }
  } else {
    return false;
  }
  
}

function checkDataBase(name, password){
  loginStatus = dataBase.filter( (value) => {
      if((value.username === name) && (value.password === password)){
        idGrantedAccess = value.id;
        console.log(`ID Granted Access is --- ${idGrantedAccess}`);
        return true ;
      }
  });
}

function renderStatus(){

  if(loginStatus.length !== 0){
    alert('Authorised');
    switch (idGrantedAccess){
      case 'id1': 
        console.log( JSON.stringify(userDetails.id1) );
        break;

      case 'id2': 
        console.log( JSON.stringify(userDetails.id2) );
        break;

      default:
        break;
    }

  } else if (loginStatus.length === 0) {
    alert('Not found')
  }
}