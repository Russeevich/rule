const number = document.getElementById('number'),
    color = document.getElementById('color'),
    content = document.getElementById('content')
let change = true

const changing = (num, col) => {
    while (content.firstChild)
        content.removeChild(content.firstChild)
    for (var i = 0; i < num; i++) {
        var div = document.createElement('div')
        div.innerText = i + 1
        div.classList.add('content__item')
        if (i % 2 == change)
            div.style.background = col
        content.append(div)
    }
}

number.addEventListener('change', e => {
    changing(number.value, color.value)
})

color.addEventListener('change', e => {
    change = !change
    changing(number.value, color.value)
})