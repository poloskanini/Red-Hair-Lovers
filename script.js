// Header change background

window.onscroll = function() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background="white";
    document.getElementById("desktop-left-title").style.color="black";
    document.getElementById("desktop-center-link").style.color="black";
  } else {
    document.getElementById("header").style.background="transparent";
    document.getElementById("desktop-left-title").style.color="white";
    document.getElementById("desktop-center-link").style.color="white";
  }
}
