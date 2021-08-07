// Header change background

window.onscroll = function() {
  if (document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.background="rgba(255,255,255,.7)";
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