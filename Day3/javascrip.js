var openbtn=document.querySelector(".open_modal");
var open_modal=document.querySelector(".content_modal");
var closebtn=document.querySelector(".button");
var closeIcon=document.querySelector(".heaing span");

function close(){
    open_modal.classList.toggle("gg");
}

openbtn.addEventListener('click',close);
closebtn.addEventListener('click',close);
closeIcon.addEventListener('click',close);

// openbtn.addEventListener('click',close);