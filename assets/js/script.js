// create button 

function createButton(id, imageSrc) {
    const button = document.createElement("button");
    const image = document.createElement("img");
    image.src = imageSrc;
    button.appendChild(image);
    const box = document.getElementById(id);
    box.appendChild(button);
}


createButton("box1", "./assets/img/calderoneMinus.png");
createButton("box2", "./assets/img/cappelloReset.png");
createButton("box3", "./assets/img/calderonePlus.png")

const minus = box1;
const reset = box2;
const plus = box3;

// button css

minus.style.width = "80px"
minus.style.height = "60px"
minus.style.borderRadius = "10px"
minus.style.cursor = "pointer";

reset.style.width = "80px"
reset.style.height = "60px"
reset.style.borderRadius = "10px"
reset.style.cursor = "pointer";

plus.style.width = "80px"
plus.style.height = "60px"
plus.style.borderRadius = "10px"
plus.style.cursor = "pointer";


// counter

const buttonContainer = document.getElementById("buttons-container");
const counter = document.getElementById("numbers");
let count = 0;

buttonContainer.addEventListener("click", function(event) {
    const div = event.target.closest("div");

    if(!div) {
        return;
    }

    if (div.classList.contains("minus")) {
        decrease();
        animationMinus();
    } else if (div.classList.contains("reset")) {
        resets();
        setTimeout(animationResetPlus, 100);
        setTimeout(animationResetMinus, 200);
    } else if (div.classList.contains("plus")) {
        increase();
        animationPlus();
    }
});

function decrease() {
    count -= 1;
    counter.innerHTML = count;
    minus.disabled = true;
    setTimeout (function() {
        minus.disabled = false;
    }, 4600)
}


function resets() {
    count = 0;
    counter.innerHTML = count;
    reset.disabled = true;
    setTimeout (function() {
        reset.disabled = false
    }, 4300);
}


function increase() {
    count += 1; 
    counter.innerHTML = count;
    plus.disabled = true;
    setTimeout (function() {
        plus.disabled = false;
    }, 4600)
}










