// Esercizio 1 - palindromo
var scriptBtn1 = document.getElementById('esercizio-1');

scriptBtn1.addEventListener('click',
  function() {
    //Chiedo di inserire una parola
    var parolaUtente = prompt('Inserisci una parola')
    console.log(parolaUtente);
    //Validazione Parola inserita dall'utente
    while( (parolaUtente == '') || (parolaUtente == null) || !isNaN(parolaUtente) ) {
      parolaUtente = prompt('Errore: Non hai inserito una parola! Inserisci una parola');
    }

    var parolaArray = parolaUtente.split('')
    console.log(parolaArray)

    var parolaArrayReverse = parolaArray.reverse()
    console.log(parolaArrayReverse)

    var controllo = false;
    var i = 0;
    while( (i < parolaArray.length) ) {
      if (parolaArray[i] === parolaArray.reverse() ) {
        controllo = true;
      }
      //interruzione loop
      i++
    }
    if(controllo == true) {
      alert('Parola polindroma')
    } else{
      alert('Non è una parola polindroma')
    }
  }
);
