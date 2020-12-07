const modal = document.getElementById('modal')

const Modal = () => {
    modal.classList.toggle('active')
}

modal.addEventListener('click', e => {
    if (e.target === modal)
        modal.classList.remove('active')
})