// controlla lo stato della media query

function onMediaQuery2(mq) {
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
    ermione.style.width = "10%";
    harry.style.width = "10%";
    voldemort.style.width = "20%"
  }
}

// registra la funzione di callback per la media query
let mq = window.matchMedia("(max-width: 960px)");
mq.addListener(onMediaQueryChange);

// esegui la funzione di callback all'avvio della pagina
onMediaQuery2(mq);
