$( document ).ready(function() {
 //ALERT CON 5 NUMERI RANDOM DA RICORDARE
  var numeriDaRicordare = [];
  while (numeriDaRicordare.length < 5) {
    var numero = getRandomIntInclusive(1,100);
    if (!numeriDaRicordare.includes(numero)) {
        numeriDaRicordare.push(numero)
    }
  }
  alert("I numeri da ricordare sono " + numeriDaRicordare);
  //ASPETTO 30 SECONDI
  setTimeout(function() {
    var numeriUtente = [];
    for (var i = 0; i < 5; i++) {
    var numero = prompt("Inserisci un numero che ricordi");
    numeriUtente.push(parseInt(numero));
    }

    console.log(numeriUtente);
    var punteggio = 0;
      //CONFRONTO I NUMERI
      for (var i = 0; i < numeriUtente.length; i++) {
        if (numeriDaRicordare.includes(numeriUtente[i])) {
          punteggio++
        }
      }
      if (punteggio == 1) {
        console.log("Hai indovinato " + punteggio + " numero su 5");
      } else {
      console.log("Hai indovinato " + punteggio + " numeri su 5");
      }

  }, 3000);
});

// FUNZIONI

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
