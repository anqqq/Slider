const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')

const sideBar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSLide = document.querySelector('.main-slide')
const slideCount = mainSLide.querySelectorAll('div').length

let activeSlideIndex = 0

sideBar.style.top = `-${ (slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(way) {
    if (way === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    } else if (way === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }

    const height = container.clientHeight

    mainSLide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}