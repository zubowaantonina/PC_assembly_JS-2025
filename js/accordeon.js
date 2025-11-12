const accordeon=()=>{
    // const contents = document.querySelectorAll('.program-line__content')
const title = document.querySelectorAll('.program-line__title')
const descr = document.querySelectorAll('.program-line__descr')

// contents.forEach((elem) => {
//     const title = elem.querySelector('.program-line__title')
//     const descr = elem.querySelector('.program-line__descr')

//     title.addEventListener('click', () => {

//         descr.classList.toggle('active')
//     })
// })

title.forEach((item, index) => {
    item.addEventListener('click', () => {
        descr.forEach((item) => {
            item.classList.remove('active')
        })
        descr[index].classList.add('active')
    })

})

}
accordeon()