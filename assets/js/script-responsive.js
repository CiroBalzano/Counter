// controlla lo stato della media query

function onMediaQuery1(mq1) {
    if (mq1.matches) {
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
  let mq1 = window.matchMedia("(max-width: 400px)");
  mq1.addListener(onMediaQueryChange);
  
  // esegui la funzione di callback all'avvio della pagina
  onMediaQuery1(mq1);

  
// controlla lo stato della media query

function onMediaQuery2(mq2) {
  if (mq2.matches) {
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
let mq2 = window.matchMedia("(max-width: 960px)");
mq2.addListener(onMediaQueryChange);

// esegui la funzione di callback all'avvio della pagina
onMediaQuery2(mq2);
