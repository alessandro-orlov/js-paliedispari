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
