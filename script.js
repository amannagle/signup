const passwordfield = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirmPassword');
passwordfield.addEventListener('keyup',matchPassword);
confirmPasswordField.addEventListener('keyup',matchPassword);
const errortext = document.querySelector('#errortext')
let password='';
let confirmPassword='';
function matchPassword(event)
{
    event.target.id == 'password' ? (password=event.target.value) : (confirmPassword=event.target.value)
    console.log(`${password} and ${confirmPassword}`);
    if((password == confirmPassword) || (password == '' || confirmPassword == ''))
    {
        passwordfield.classList.remove('error');
        confirmPasswordField.classList.remove('error');
        errortext.style.display='none';
    }
    else
    {
        passwordfield.classList.add('error');
        confirmPasswordField.classList.add('error');
        errortext.style.display='block';
    }
}