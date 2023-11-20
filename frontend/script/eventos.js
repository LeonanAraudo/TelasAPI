//slide cards
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
        },
        "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
        },
    },
});
const faEllipsisVertical = document.getElementById('menu-topico')
const conteinerMenu = document.getElementById('conteiner-menu')
conteinerMenu.style.display = "none"
faEllipsisVertical.addEventListener("click", (e)=>{

    if(conteinerMenu.style.display == "none"){
        conteinerMenu.style.display = "block"
    }else{
        conteinerMenu.style.display = "none"
    }
})
const moreInfo = document.querySelectorAll(".moreInfo")
console.log(moreInfo)
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
moreInfo.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        if( modal.style.display == "none"){
            modal.style.display = "block"
        }else{
            modal.style.display = "none"
        }
        modalClose.addEventListener("click", closeModal)
        // Fechar o modal quando clicar fora da caixa modal
        function closeModal() {
            modal.style.display = "none";
        }
        window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
        });
    })
})

