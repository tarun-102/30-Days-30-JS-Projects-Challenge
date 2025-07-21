const textInput = document.getElementById("text")
const character = document.getElementById('character');
const words = document.getElementById('words');
console.log(textInput)

textInput.addEventListener("input", ()=> {
    const text = textInput.value;
    console.log(text);
    let charactetcount = text.length
    character.textContent=`${charactetcount}/280`

    let wordscount = text.trim().split(/\s+/).filter(word => word !== "")
    words.textContent=`words: ${wordscount.length}`
})
