var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

var typed = new Typed('#element', {
    strings: ['Notes', 'Assingments', 'PPTs', 'Questions'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    showCursor: true,
  });