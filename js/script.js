let imagens = document.querySelectorAll('.center');
let modal = document.querySelector('.modal');
let modalimg = document.querySelector('#modal_img');
let btclose = document.querySelector('#bt_close');
let srcVal="";

for (let i =0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){

        srcVal =imagens[i].getAttribute('src');
        modalimg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');

    });
}

btclose.addEventListener('click',function(){
    modal.classList.toggle('modal_active');

});

const ir_topo = document.querySelector("#ir_topo");

ir_topo.addEventListener("click", function () {
    window.scrollTo({
//rodar a pagina até:
        top:0,
        left:0,
        behavior:"smooth"

    })

});
 