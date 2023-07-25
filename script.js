password = document.querySelector('#password');
confirm_password = document.querySelector('#confirm_password');
PasswordDiv = document.querySelector('.Password-div');

password.addEventListener('input', handlePassword);
confirm_password.addEventListener('input', handlePassword);

errorText = document.createElement("p");
errorText.textContent = '*Passwords do not match';
errorText.classList.add('PasswordMatchingError')

function handlePassword(e) {
  if (password.value !== confirm_password.value) {
    password.classList.add('error');
    confirm_password.classList.add('error');
    PasswordDiv.appendChild(errorText);
  }
  
  if (password.value === confirm_password.value) {
    
    password.classList.remove('error');
    confirm_password.classList.remove('error');
    this.classList.add('input-focus');
    PasswordDiv.removeChild(errorText);
  }
  
}