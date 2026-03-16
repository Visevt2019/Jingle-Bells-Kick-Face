/* app.js
   Simplified version
   Controls side menu only
*/

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuCloseTop = document.getElementById("menuCloseTop");

function closeMenu(){
  sideMenu.setAttribute("aria-hidden","true");
}

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    const state = sideMenu.getAttribute("aria-hidden");
    sideMenu.setAttribute("aria-hidden", state === "false" ? "true" : "false");
  });
}

if(menuCloseTop){
  menuCloseTop.addEventListener("click", closeMenu);
}

document.addEventListener("click", (e)=>{
  if(!sideMenu.contains(e.target) && !menuBtn.contains(e.target)){
    closeMenu();
  }
});

/* series card scroll animation */

const cards = document.querySelectorAll(".series-card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card => observer.observe(card));
