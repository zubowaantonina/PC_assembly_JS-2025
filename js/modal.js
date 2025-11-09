const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const modalHeader = document.querySelector('.modal__header')
const courseBtn = document.querySelector('.course__button')

const modalClose = () => {
    modal.style.display = ''
}

const modalOpen = () => {
    modal.style.display = 'flex'
}
modalBtn.addEventListener('click', () => {
    modalOpen()
})
courseBtn.addEventListener('click', () => {
    modalOpen()
})
modal.addEventListener('click', () => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) {
        modalClose()
    }
})

modalHeader.insertAdjacentHTML('beforeBegin', `
   <div class="closeModal">
   <img src="img/icon_cross.svg" alt="close">
   </div>
    `
)
const closeBtn = document.querySelector('.closeModal')

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modalClose()
})
