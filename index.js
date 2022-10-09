// document.querySelector("#a").addEventListener('click', () => {
//     window.open("https://instagram.com/irvinehighasb", '_blank');});

// document.querySelector("#b").addEventListener('click', () => {
//         window.open("https://instagram.com/nhsgamingclub", '_blank');});
    
// document.querySelector("#c").addEventListener('click', () => {
//         window.open("https://instagram.com/whsesports", '_blank');});

// document.querySelector("#d").addEventListener('click', () => {
//         window.open("https://instagram.com/uhstrojanarmy", '_blank');});

// document.querySelector("#e").addEventListener('click', () => {
//             window.open("https://instagram.com/portolahighesports", '_blank');});
const el = document.querySelector("#moveimg");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});