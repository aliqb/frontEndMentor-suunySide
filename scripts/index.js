let humbergur = document.querySelector(".humburger-icon");
let menu = document.querySelector(".mobile-menu");


humbergur.addEventListener('click',toggle);

function toggle(){
    if(menu.classList.contains('d-none')){
        console.log('yes');
    }else{
        console.log('false');
    }
    menu.classList.toggle('d-none');
}