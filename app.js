const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".container .color");
let button = document.querySelector("#btn");
button.addEventListener("click", upDate);
function upDate(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
    
}