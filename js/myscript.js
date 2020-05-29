// Esercizio 1 - palindromo
var scriptBtn1 = document.getElementById('esercizio-1');

scriptBtn1.addEventListener('click',
  function() {
    //Chiedo di inserire una parola
    var parolaUtente = prompt('Inserisci una parola')
    console.log(parolaUtente);

    // La mia funzione
    verificaPolindroma(parolaUtente);
  }
);

//Esercizio 2 Pari e Dispari
var scriptBtn1 = document.getElementById('esercizio-2');

scriptBtn1.addEventListener('click',
  function() {

    //Utente sceglie pari o dispari
    var pariOdispari = parseInt(prompt("Secgli 1 per pari o 0 per dispari"));
    while ( (pariOdispari != 1) && (pariOdispari != 0) ) {
      pariOdispari = parseInt(prompt("Errore: Digita 0 o 1"));
    }
    //Scelta dell'utente
    var sceltaUtente = 'dispari';
    var dispari = sceltaUtente;
     if(pariOdispari == 1) {
       sceltaUtente = 'pari';
    }
    console.log('utente ha scelto ' + sceltaUtente)

    //Chiedo un numero da 1 a 5 all'utente
    var numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'));
    console.log('Numero digitato dall\'utente ' + numeroUtente);

    //Numero random al computer
    var numeroComputer = Math.floor(Math.random() * 6);
    console.log('numero random dell\'computer ' + numeroComputer);

    //Somma i due numeri
    var somma = numeroUtente + numeroComputer;
    console.log('la somma dei due numeri è: ' + somma)

    //Stabiliamo se è pari
    var pari = false;
    if(somma % 2 == 0) {
      pari = true;
    }
    console.log('La somma è un numero pari? ' + pari)

    //Vediamo chi ha vinto
    if (sceltaUtente == 'pari' && pari == true) {
      alert('ha vinto l\'umano perche ha scelto pari');
    } else if (sceltaUtente == 'dispari' && pari == false) {
      alert('l\'umano ha vinto perche ha scelto dispari')
    }
    else {
      alert('ha vinto la macchina AHAHAHAAHAHAH');
    }

    
   }

);//Fine click




// ======================= FUNCTIONS ==============================
//Function 1
//Funzione di verifica se una parola è Polindrome.
//Argomento deve essere una stringa !important
function verificaPolindroma(parola) {

  //Validazione parola
  while( (parola == '') || (parola == null) || !isNaN(parola) || (parola.length < 2) ) {
    parola = prompt('Errore: Non hai inserito una parola! Inserisci una parola');
  }
  //Variabile sulla qualle effettuare il controllo
  var controllo = false;
  var parolaInvertita = "";
  for(var i = parola.length - 1; i >= 0; i--) {
    parolaInvertita += parola[i];
    if (parola == parolaInvertita) {
      controllo = true;
    }
  }

  //Messaggio di output
  if(controllo == true) {
    alert('Parola polindroma')
  } else {
    alert('Non è una parola polindroma')
  }
};
