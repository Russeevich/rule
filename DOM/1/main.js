const slider = document.getElementById('slider'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    slideOffset = document.getElementsByClassName('slider__item')[0].offsetWidth,
    viewslide = 3,
    maxWidth = (slider.children.length - viewslide) * slideOffset
let position = 0

document.getElementById('slider__show').style.width = viewslide * slideOffset

left.addEventListener('click', () => {
    if (position <= 0)
        return
    position -= slideOffset
    slider.style.right = position + 'px'
})

right.addEventListener('click', () => {
    if (position >= maxWidth)
        return
    position += slideOffset
    slider.style.right = position + 'px'
})