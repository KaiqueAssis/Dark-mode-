
const button = document.getElementById('mode-selector');
const text = document.getElementById('page-title')
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', chargemode)

function chargemode(){
 changeclass()     
 changetext()
}

function changeclass(){
    button.classList.toggle('dark-mode');
    text.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

function changetext(){
    if (body.classList.contains('dark-mode')) {
        button.innerHTML = "Light Mode";
        text.innerHTML = "Dark Mode ON";
        return;
    }
    button.innerHTML = "Dark Mode ";
    text.innerHTML = "Light Mode ON";
    
}