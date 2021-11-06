/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*Loading Scroll*/
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/*Tombol Scroll*/
mybutton = document.getElementById("mybtn");

/*Jam*/
setInterval(displayClock, 500);
function displayClock(){
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'});
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset:true
});

sr.reveal('.section-title',{delay: 400});
sr.reveal('.title_dua',{delay: 400}); 

/*SCROLL HOME*/
sr.reveal('.home__titledua',{});
sr.reveal('.about_img',{delay: 400}); 
sr.reveal('.about_name',{}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_form',{interval: 200}); 




