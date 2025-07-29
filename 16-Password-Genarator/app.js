const display = document.getElementById("display");
const copyButton = document.getElementById('copy');
const rangeInput = document.getElementById('range');
const azInput = document.getElementById("atoz");
const characterInput = document.getElementById("character");
const numberInput = document.getElementById('number');

const genarator = () => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let numberallowed = numberInput.checked;
    let characterAllowed = characterInput.checked;
    let A_ZAllowed = azInput.checked;
    let length = parseInt(rangeInput.value) || 6;

    if (numberallowed === true) {
        str += 1234567890;
    }
    if(characterAllowed === true) {
        str += '@#$%&*()_+-[]';
    }

    if(A_ZAllowed === true) {
        str += 'ABCDEFGHIJKLMNOPQISTUVWXYZ';
    }

    for(let i = 1; i <= length;  i++){  
        let password = Math.floor(Math.random() * str.length)
        pass += str.charAt(password)
        console.log(pass);        
    }
    display.value = pass;
    document.getElementById("Lengthlabel").innerText = `Length ${length}`
}


rangeInput.addEventListener("input",genarator);
azInput.addEventListener('input', genarator);
numberInput.addEventListener("input", genarator);
characterInput.addEventListener("input", genarator);
copyButton.addEventListener("click", () => {
     display.select();
    display.setSelectionRange(0,101 ); 
    navigator.clipboard.writeText(display.value)
        .then(() => alert("Password copied!"))
        .catch((err) => alert("Failed to copy!"));
})
genarator();

