// create button 

let minus = document.createElement("button");
let calderoneMinus = document.createElement("img")
calderoneMinus.src = "./assets/img/calderoneMinus.png";


minus.appendChild(calderoneMinus);

let box1 = document.getElementById("box1");

box1.appendChild(minus);


let reset = document.createElement("button");
let cappelloReset = document.createElement("img")
cappelloReset.src = "./assets/img/cappelloReset.png";

reset.appendChild(cappelloReset);

let box2 = document.getElementById("box2");

box2.appendChild(reset);


let plus = document.createElement("button");
let calderonePlus = document.createElement("img")
calderonePlus.src = "./assets/img/calderonePlus.png";

plus.appendChild(calderonePlus);

let box3 = document.getElementById("box3");

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

let counter = document.getElementById("numbers");
let count = 0;

minus.addEventListener("click", function decrease() {
    count -= 1;
    counter.innerHTML = count;
    minus.disabled = true;
    setTimeout (function() {
        minus.disabled = false;
    }, 4600)
});


reset.addEventListener("click", function() {
    count = 0;
    counter.innerHTML = count;
    reset.disabled = true;
    setTimeout (function() {
        reset.disabled = false
    }, 4300);
});


plus.addEventListener("click", function increase() {
    count += 1; 
    counter.innerHTML = count;
    plus.disabled = true;
    setTimeout (function() {
        plus.disabled = false;
    }, 4600)
});










