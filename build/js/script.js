

function openNav() {
  document.getElementById("menuResponsive").style.display = "block";
  document.getElementById("menuResponsive").style.width = "100%";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.querySelector('body').style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("menuResponsive").style.display = "none";
  document.getElementById("menuResponsive").style.width = "0";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
  document.querySelector('body').style.overflow = "auto";
}
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
function topFunction() {
  // window.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function () {
  var el = document.getElementById('loadElement');
  el.style.display = 'none';
};


let textWrapper = document.querySelector('.animate-h2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.animate-h2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.animate-h2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

let textWrapperp = document.querySelector('.animate-p');
textWrapperp.innerHTML = textWrapperp.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.animate-p .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.animate-p',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



