// Header change background
window.onscroll = function() {
  if (document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.background="rgba(255,255,255,.9)";
    document.getElementById("desktop-left-title").style.color="black";
    document.getElementById("desktop-center-link").style.color="black";
    document.getElementById("desktop-center-link-log").style.color="black";

    } else {
    document.getElementById("header").style.background="transparent";
    document.getElementById("desktop-left-title").style.color="white";
    document.getElementById("desktop-center-link").style.color="white";
    document.getElementById("desktop-center-link-log").style.color="white";
  }
}

// Effet sur l'input
const inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
  let field = inputs[i];

  field.addEventListener('input', (e) => {
    if(e.target.value != "") {
      e.target.parentNode.classList.add('animation');
    } else if (e.target.value = ""){
      e.target.parentNode.classList.remove('animation');
    }
  })
}

// LOCALSTORAGE
// const storageInput = document.querySelector('.storage');
// const text = document.querySelector('.text');
// const buttonSub = document.querySelector('.buttonsub');
// const storedInput = localStorage.getItem('textinput');
// let storedFinalName = document.getElementById('storedfinalname');


// Stocke ce que j'écris dans l'input en temps réel
// storageInput.addEventListener('input', letter => {
//   text.textContent = letter.target.value
// })


// Fonction pour sauvegarder ce que j'écris dans le local Storage
// const saveToLocalStorage = () => {
//   localStorage.setItem('textinput', text.textContent);
// }

// buttonSub.addEventListener('click', saveToLocalStorage);

// storedFinalName.textContent = text.textContent;

const name = () => {
  let storedFinalName = document.getElementById('storedfinalname');
  let nameStorage = localStorage.getItem('nom').toUpperCase();
  if (nameStorage == null) {
    storedFinalName.innerHTML = " "
  } else {
    storedFinalName.innerHTML = `${nameStorage},`;
  }
}

function setData() {
  let user = document.getElementById('user').value;
  localStorage.setItem('nom', user);
}

name();