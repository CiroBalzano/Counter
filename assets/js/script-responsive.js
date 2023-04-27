// controlla lo stato della media query

function onMediaQueryChange(mq) {
  if (mq.matches) {
    // la media query è attiva
    scopaMinus.style.width = "10%";
    scopaPlus.style.width = "10%";
    ermione.style.width = "30%";
    harry.style.width = "30%";
    voldemort.style.width = "30%"
    harry.style.position = "absolute"
    harry.style.bottom = "0"
    harry.style.right = "0"
    ermione.style.position = "absolute"
    ermione.style.top = "0"
    ermione.style.left = "0"
    scopaMinus.style.position = "absolute"
    scopaMinus.style.top = "0"
    scopaMinus.style.left = "0"
    scopaPlus.style.position = "absolute"
    scopaPlus.style.bottom = "0"
    scopaPlus.style.right = "0"
  } else {
    // la media query non è attiva
    scopaMinus.style.width = "5%";
    scopaPlus.style.width = "5%";
    ermione.style.width = "10%";
    harry.style.width = "10%";
    voldemort.style.width = "20%"
  }
}

// registra la funzione di callback per la media query
let mq = window.matchMedia("(max-width: 1280px)");
mq.addListener(onMediaQueryChange);

// esegui la funzione di callback all'avvio della pagina
onMediaQueryChange(mq);
