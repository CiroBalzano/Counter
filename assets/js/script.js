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

const minus = document.querySelector("#box1");
const reset = document.querySelector("#box2");
const plus = document.querySelector("#box3");

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
    } else if (div.classList.contains("reset")) {
        resets();
        setTimeout(animationResetPlus, 100);
        setTimeout(animationResetMinus, 200);
    } else if (div.classList.contains("plus")) {
        increase();
    }
});


function decrease() {
    if (minus.classList.contains("disabled")) {
        return;
    }
    minus.classList.add("disabled");
    count -= 1;
    counter.innerHTML = count;
    animationMinus();
    setTimeout (function() {
        minus.classList.remove("disabled");
    }, 4600)
}


function resets() {
    if (reset.classList.contains("disabled")) {
        return;
    }
    reset.classList.add("disabled");
    count = 0;
    counter.innerHTML = count;
    setTimeout (function() {
        reset.classList.remove("disabled");
    }, 4300);
}


function increase() {
    if (plus.classList.contains("disabled")) {
        return;
    }
    plus.classList.add("disabled");
    count += 1; 
    counter.innerHTML = count;
    animationPlus();
    setTimeout (function() {
        plus.classList.remove("disabled");
    }, 4600)
}