const p  = document.querySelector("p");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const reset = document.querySelector("#reset");

let count = 0;
p.innerText = "Count: " + count; 
add.addEventListener("click", () => {
    count = count + 1;
    p.innerText = "Count: " + count;
})

remove.addEventListener("click", () => {
    if (count > 0) count = count - 1;
    p.innerText = "Count: " + count;
})

reset.addEventListener("click", () =>{
    count = 0;
    p.innerText = "Count: " + count;
})
