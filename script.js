// Header change background

window.onscroll = function() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.background="rgba(255,255,255,.7)";
    document.getElementById("desktop-left-title").style.color="black";
    document.getElementById("desktop-center-link").style.color="black";
  } else {
    document.getElementById("header").style.background="transparent";
    document.getElementById("desktop-left-title").style.color="white";
    document.getElementById("desktop-center-link").style.color="white";
  }
}
