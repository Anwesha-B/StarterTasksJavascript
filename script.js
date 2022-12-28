const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        clearActiveClass();
        panel.classList.add('active');
    })
})

function clearActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}