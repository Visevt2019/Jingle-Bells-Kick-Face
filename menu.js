// MENU CONTROLLER

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuCloseTop = document.getElementById("menuCloseTop");

// open menu
if(menuBtn){
menuBtn.addEventListener("click", () => {
sideMenu.setAttribute("aria-hidden","false");
});
}

// close menu
if(menuCloseTop){
menuCloseTop.addEventListener("click", () => {
sideMenu.setAttribute("aria-hidden","true");
});
}

// close if clicking outside
document.addEventListener("click",(e)=>{

if(!sideMenu) return;

if(
!sideMenu.contains(e.target) &&
!menuBtn.contains(e.target)
){
sideMenu.setAttribute("aria-hidden","true");
}

});



// ARCHIVE CARD SCROLL ANIMATION

const cards = document.querySelectorAll(".series-card");

if(cards.length){

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card => observer.observe(card));

}
