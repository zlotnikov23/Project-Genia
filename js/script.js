function LogIn() {
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  
  console.log(username.value, password.value);

  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(commits => {
      console.log(commits);
    })
    .catch(err => {
      console.error(err);
    });
  }

const logInButton = document.querySelector('#butt');

logInButton.addEventListener('click', () => {
  login();
});
 function login(){
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  var islength = password.length >= 3
  var izlatinets = /^[a-zA-Z1-9]+$/.test(password) 
   if (!islength || !izlatinets){
     return 
   }
   var user_name_length =username.length >=5 
   if (!user_name_length){
     return
   } 

  fetch('https://github.com/EddyRock97/json/blob/master/index.json',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    } , 
    body: JSON.stringify({username, password})
    
     
    
    }).then(response => console.log(response))
      .catch(response=> console.log(response))
  console.log ()
 }



