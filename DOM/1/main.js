const slider = document.getElementById('slider'),
    right = document.getElementById('right'),
    left = document.getElementById('left'),
    slide = slider.children[0],
    count = slider.children.length,
    slider__show = document.getElementById('slider__show'),
    slide__in = 3
var position = 0


slider__show.style.width = `${slide__in * slide.offsetWidth}px`


right.addEventListener('click', e => {
    if (position - slide.offsetWidth <= -(count * slide.offsetWidth - (slide__in - 1) * slide.offsetWidth))
        return
    position -= slide.offsetWidth
    slider.style.transform = `translate(${position}px, 0)`
})

left.addEventListener('click', e => {
    if (position + slide.offsetWidth > 0)
        return
    position += slide.offsetWidth
    slider.style.transform = `translate(${position}px, 0)`
})