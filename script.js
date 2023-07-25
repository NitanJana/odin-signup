password = document.querySelector('#password');
confirm_password = document.querySelector('#confirm_password');
PasswordDiv = document.querySelector('.Password-div');

password.addEventListener('input', handlePassword);
confirm_password.addEventListener('input', handlePassword);

invalidText = document.createElement("p");
invalidText.textContent = '*Passwords do not match';
invalidText.classList.add('invalidPassword')

validText = document.createElement("p");
validText.textContent = '*Passwords match';
validText.classList.add('validPassword')

function handlePassword(e) {
  
  if (!password.value || !confirm_password.value) { 
    if(PasswordDiv.contains(invalidText)) PasswordDiv.removeChild(invalidText);
    if(PasswordDiv.contains(validText)) PasswordDiv.removeChild(validText);
    
    password.classList.remove('invalidInput');
    confirm_password.classList.remove('invalidInput');
    this.classList.add('input-focus');
  }
  if (password.value !== confirm_password.value) {
    password.classList.add('invalidInput');
    confirm_password.classList.add('invalidInput');
    PasswordDiv.appendChild(invalidText);
    PasswordDiv.removeChild(validText);
  }
  
  if (password.value === confirm_password.value) {
    password.classList.remove('invalidInput');
    confirm_password.classList.remove('invalidInput');
    PasswordDiv.removeChild(invalidText);
    PasswordDiv.appendChild(validText);
    this.classList.add('input-focus');
  }
  
}