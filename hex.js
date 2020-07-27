const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function generateHex(){
    let arr = [];
    for (let i = 0; i < 6; i++) {
       randomNumber = Math.floor(Math.random()*hex.length);
        arr.push(hex[randomNumber]);
    }

    return "#" + arr.join("");
}

const color = document.querySelector(".container .color");
let button = document.querySelector("#btn");
button.addEventListener("click", upDate);
function upDate(){
    let res = generateHex()
    color.textContent = res;
    document.body.style.backgroundColor = res;
    
}