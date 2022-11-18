function stampaNumeri() {
  const numeri = [];
  confirm(
    "Il gioco inizia. Compaiono dei numeri. Hai 30 secondi per memorizzarli"
  );
  for (let i = 0; i < 5; i++) {
    numeri[i] = Math.floor(Math.random() * 5) + 1; //Genera numero random tra 1 e 5
    document.getElementById("numeri").innerHTML += numeri[i];
  }
  return numeri;
}

function cancellaNumeri() {
  document.getElementById("numeri").setAttribute("class", "d-none");
  document.getElementById("form").setAttribute("class", "");
}

function Gioco() {
  const numeri = stampaNumeri();
  window.setTimeout(cancellaNumeri, 3000);
}

function controllaNumeri() {
  const numeri = parseInt(document.getElementById("numeri").innerHTML);
  for (let i = 0; i < numeri.lenght; i++) {
    if (numeri[i] != document.getElementById("n" + 1).innerHTML.valueOf) {
      console.log("sbagliato");
      i = numeri.lenght;
    }
  }
}
