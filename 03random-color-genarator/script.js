const btn = document.querySelector("#btn");
const colorCode = document.querySelector("#colorCode");


const randomColorGEneretor = () => {
    const latters = "0123456789ABCDEF";

    let color = '#';

    for (let i = 0; i < 6 ; i++) {
        color += latters[Math.floor(Math.random() * 16)]
    }
    return color;
}

btn.addEventListener("click", () => {
    const newColor = randomColorGEneretor();
    colorCode.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})