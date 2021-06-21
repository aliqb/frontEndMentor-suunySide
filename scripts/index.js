let humbergur = document.querySelector(".humburger-icon");
let menu = document.querySelector(".menu");


humbergur.addEventListener('click',toggle);

function toggle(){
    menu.classList.toggle("toggle");
}