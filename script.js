const form = document.querySelector(".form-quiz");
const questionblock = document.querySelectorAll(".question-block");
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
let tableau_verification = [];
let reponse = ["b", "a", "c", "c", "a", "b", "a", "a", "c", "a"];
let resultat_form = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log() elle récupére les valeur des q1 qui est checked
  for (let i = 1; i <= questionblock.length; i++) {
    resultat_form.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  veriffunction(resultat_form);
  resultat_form = [];
});

function veriffunction(tabresult) {
  for (let a = 0; a < questionblock.length; a++) {
    if (tabresult[a] === reponse[a]) {
      tableau_verification.push(true);
    } else {
      tableau_verification.push(false);
    }
  }
  afficheresultat(tableau_verification);
  transitionresultat(tableau_verification);
  tableau_verification = [];
}

function afficheresultat(tabverifcation) {
  const nbErreur = tabverifcation.filter((el) => el !== true).length;
  switch (nbErreur) {
    case 0:
      titreResultat.innerText = `${emojis[0]} Bravo , tout est bon`;
      aideResultat.innerText = "";
      noteResultat.innerText = `${questionblock.length}/${questionblock.length}`;
      break;
    case 1:
      titreResultat.innerText = `${emojis[1]} , une seule erreur pas mal`;
      aideResultat.innerText = "Retenter la réponse en rouge";
      noteResultat.innerText = `${questionblock.length - 1}/${
        questionblock.length
      }`;
      break;
    case 2:
      titreResultat.innerText = `${emojis[1]} 2 erreurs, vous pouvez y arriver`;
      aideResultat.innerText = "Retenter les question en rouge";
      noteResultat.innerText = `${questionblock.length - 2}/${
        questionblock.length
      }`;
      break;
    case 3:
      titreResultat.innerText = `${emojis[1]} Que 3 erreurs vous pouvez y arriver`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 3}/${
        questionblock.length
      }`;
      break;
    case 4:
      titreResultat.innerText = `${emojis[2]} encore un essaie`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 4}/${
        questionblock.length
      }`;
      break;
    case 5:
      titreResultat.innerText = `${emojis[2]} vous avez eu la moitié de bonnes réponses`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 5}/${
        questionblock.length
      }`;
      break;
    case 6:
      titreResultat.innerText = `${emojis[2]} 6 erreurs vous pouvez mieux faire`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 6}/${
        questionblock.length
      }`;
      break;
    case 7:
      titreResultat.innerText = `${emojis[3]} 7 erreurs vous pouvez mieux faire`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 7}/${
        questionblock.length
      }`;
      break;
    case 8:
      titreResultat.innerText = `${emojis[3]} 8 erreurs ça en fait beaucoup`;
      aideResultat.innerText = "Retenter la question en rouge";
      noteResultat.innerText = `${questionblock.length - 8}/${
        questionblock.length
      }`;
      break;
    case 9:
      titreResultat.innerText = `${emojis[4]} trop d'erreurs`;
      aideResultat.innerText = "Retenter les question en rouge";
      noteResultat.innerText = `${questionblock.length - 9}/${
        questionblock.length
      }`;
      break;
    case 10:
      titreResultat.innerText = `${emojis[4]} aucune bonne réponse dommage`;
      aideResultat.innerText = "Retenter les question en rouge";
      noteResultat.innerText = `0/${questionblock.length}`;
      break;
    default:
      "Cas innatendu";
  }
}

function transitionresultat(valeurboolean) {
  for (let j = 0; j < valeurboolean.length; j++) {
    if (valeurboolean[j] === true) {
      questionblock[j].style.background = 'lightgreen';
    } else {
      questionblock[j].style.background = '#ffb8b8';
      questionblock[j].classList.add('echec');
      setTimeout(() => {
        questionblock[j].classList.remove('echec');
      }, 500);
    }
  }
}

questionblock.forEach (item=>{
    item.addEventListener('click',()=>{
        item.style.background = 'white';
    })
})
