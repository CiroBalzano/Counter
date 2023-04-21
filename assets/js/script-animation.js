// animation counter

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

let page1 = document.getElementById("page");

let accio = document.createElement("audio")
accio.src = "./assets/music/accio.mp3";

let wingardium = document.createElement("audio")
wingardium.src = "./assets/music/wingardium-leviosa.mp3";

let avadaa = document.createElement("audio")
avadaa.src = "./assets/music/avadaa-kedavraa.mp3";

function shoowBroomMinus() {
        page1.appendChild(scopaMinus)
}

function removeBroomMinus() {
    page1.removeChild(scopaMinus)
}

function shoowBroomPlus() {
    page1.appendChild(scopaPlus)
}

function removeBroomPlus() {
    page1.removeChild(scopaPlus)
}

function stopVoice() {
    accio.pause();
    wingardium.pause();
}


minus.addEventListener("click", function animationMinus() {
    shoowBroomMinus();
    page1.appendChild(harry)
    let audio = setTimeout (function() {
        accio.play()
    }, 100);
    let animation = setTimeout (function() {
        removeBroomMinus();
        page1.removeChild(harry)
    }, 4600);
})


reset.addEventListener("click", function animationReset() {
    removeBroomMinus();
    page1.appendChild(voldemort)
    avadaa.play()
    stopVoice();
    let animation1 = setTimeout (function() {
        page1.removeChild(voldemort)
    }, 4300)
    let animation2 = setTimeout (function() {
        page1.removeChild(harry)
    })
})

reset.addEventListener("click", function animationReset() {
    removeBroomPlus();
    page1.appendChild(voldemort)
    avadaa.play()
    stopVoice();
    let animation1 = setTimeout (function() {
        page1.removeChild(voldemort)
    }, 4300)
    let animation2 = setTimeout (function() {
        page1.removeChild(ermione)
    })
})


plus.addEventListener("click", function animationPlus() {
    page1.appendChild(scopaPlus)
    page1.appendChild(ermione)
    wingardium.play()
    let animation = setTimeout (function() {
        removeBroomPlus();
        page1.removeChild(ermione)
    }, 4600)
})

// animation css

harry.style.width = "10%"
harry.style.position = "absolute"
harry.style.bottom = "0"
harry.style.right = "0"


ermione.style.width = "10%"
ermione.style.position = "absolute"
ermione.style.top = "0"
ermione.style.left = "0"


voldemort.style.width = "20%"
voldemort.style.position = "center"


scopaMinus.style.width = "5%"
scopaMinus.style.rotate = "100deg"
scopaMinus.style.position = "absolute"
scopaMinus.style.top = "0"
scopaMinus.style.left = "0"
scopaMinus.style.animation = "move1 5s linear"


scopaPlus.style.width = "5%"
scopaPlus.style.rotate = "-80deg"
scopaPlus.style.position = "absolute"
scopaPlus.style.bottom = "0"
scopaPlus.style.right = "0"
scopaPlus.style.animation = "move2 5s linear"