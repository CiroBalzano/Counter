// controlla lo stato della media query

function onMediaQueryChange(mq) {
  if (mq.matches) {
    // la media query è attiva
    scopaMinus.style.width = "10%";
    scopaPlus.style.width = "10%";
    ermione.style.width = "30%";
    harry.style.width = "30%";
    voldemort.style.width = "30%"
  } else {
    // la media query non è attiva
    scopaMinus.style.width = "5%";
    scopaPlus.style.width = "5%";
    ermione.style.width = "15%";
    harry.style.width = "15%";
    voldemort.style.width = "15%"
  }
}

// registra la funzione di callback per la media query
let mq = window.matchMedia("(max-width: 960px)");
mq.addListener(onMediaQueryChange);

// esegui la funzione di callback all'avvio della pagina
onMediaQueryChange(mq);
