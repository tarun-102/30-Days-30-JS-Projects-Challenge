const togglebtn = document.getElementById('toggle-btn');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if(currentTheme === 'dark'){
    body.classList.add('dark-theme');
}

togglebtn.addEventListener('click', () =>{
    body.classList.toggle('dark-theme');
    let theme = 'light';
    if (body.classList.contains('darh-theme')){
        theme = 'dark';
    }
    localStorage.setItem('theme', theme)
})