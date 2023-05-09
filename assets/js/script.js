// create button 

const minus = document.createElement("button");
const calderoneMinus = document.createElement("img")
calderoneMinus.src = "./assets/img/calderoneMinus.png";


minus.appendChild(calderoneMinus);

const box1 = document.getElementById("box1");

box1.appendChild(minus);


const reset = document.createElement("button");
const cappelloReset = document.createElement("img")
cappelloReset.src = "./assets/img/cappelloReset.png";

reset.appendChild(cappelloReset);

const box2 = document.getElementById("box2");

box2.appendChild(reset);


const plus = document.createElement("button");
const calderonePlus = document.createElement("img")
calderonePlus.src = "./assets/img/calderonePlus.png";

plus.appendChild(calderonePlus);

const box3 = document.getElementById("box3");

box3.appendChild(plus);


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
        animationResetPlus();
        animationResetMinus();
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










