const modalOverLay = document.querySelector('.modal-overlay');
const modalOverLayActive = document.querySelector(".modal-overlay active")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click",function(){
        const ContentId = card.getAttribute('id')
        modalOverLay.classList.add('active')
        modalOverLay.querySelector('iframe').src = `https://rocketseat.com.br/${ContentId}`
    })
};

document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (modal.classList.contains("maximize")) {
        modal.classList.remove("maximize")
    } else { modal.classList.add("maximize") }
})

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverLay.classList.remove('active')
    modalOverLay.querySelector('iframe').src = ""
});

