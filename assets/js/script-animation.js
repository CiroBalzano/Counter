// animation counter

let page1 = document.getElementById("page");

let harry = document.createElement("img")
harry.src = "./assets/img/Harry.png";

let ermione = document.createElement("img")
ermione.src ="./assets/img/Ermione.png";

let voldemort = document.createElement("img")
voldemort.src = "./assets/img/Voldemort.png";

let scopaMinus = document.createElement("img") 
scopaMinus.src = "./assets/img/scopa.png";

let scopaPlus = document.createElement("img")
scopaPlus.src = "./assets/img/scopa.png";

let accio = document.createElement("audio")
accio.src = "./assets/music/accio.mp3";

let wingardium = document.createElement("audio")
wingardium.src = "./assets/music/wingardium-leviosa.mp3";

let avadaa = document.createElement("audio")
avadaa.src = "./assets/music/avadaa-kedavraa.mp3";

async function shoowAnimationMinus() {
    page1.appendChild(scopaMinus)
    page1.appendChild(harry)
}

function removeAnimationMinus() {
    page1.removeChild(scopaMinus)
    page1.removeChild(harry)
}

async function shoowAnimationPlus() {
    page1.appendChild(scopaPlus)
    page1.appendChild(ermione)
}

function removeAnimationPlus() {
    page1.removeChild(scopaPlus)
    page1.removeChild(ermione)
}

function stopVoice() {
    accio.pause();
    wingardium.pause();
}


minus.addEventListener("click", function animationMinus() {
    shoowAnimationMinus();
    let audio = setTimeout (function() {
        accio.play()
    }, 100);
    let animation = setTimeout (function() {
        removeAnimationMinus();
    }, 4600);
})


reset.addEventListener("click", function animationReset() {
    removeAnimationMinus();
    page1.appendChild(voldemort)
    avadaa.play()
    stopVoice();
    let animation1 = setTimeout (function() {
        page1.removeChild(voldemort)
    }, 4300)
})

reset.addEventListener("click", function animationReset() {
    removeAnimationPlus();
    stopVoice();
    page1.appendChild(voldemort)
    avadaa.play()
    let animation1 = setTimeout (function() {
        page1.removeChild(voldemort)
    }, 4300)
})


plus.addEventListener("click", function animationPlus() {
    shoowAnimationPlus();
    wingardium.play()
    let animation = setTimeout (function() {
        removeAnimationPlus();
    }, 4600)
})


// animation css


harry.style.position = "absolute"
harry.style.bottom = "0"
harry.style.right = "0"


ermione.style.position = "absolute"
ermione.style.top = "0"
ermione.style.left = "0"


voldemort.style.position = "absolute"
voldemort.style.bottom = "5%"


scopaMinus.style.rotate = "100deg"
scopaMinus.style.position = "absolute"
scopaMinus.style.top = "0"
scopaMinus.style.left = "0"
scopaMinus.style.animation = "move1 5s linear"


scopaPlus.style.rotate = "-80deg"
scopaPlus.style.position = "absolute"
scopaPlus.style.bottom = "0"
scopaPlus.style.right = "0"
scopaPlus.style.animation = "move2 5s linear"