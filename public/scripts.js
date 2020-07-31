const allCards = document.querySelector('.cards')
const iframe = document.querySelector(".redirect")
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click",function(){
        const ContentId = card.getAttribute('id')
        window.location.href = `/courses/${ContentId}`

    })
}
