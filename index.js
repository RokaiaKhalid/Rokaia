// Arriving to section
function ArrivingSection(elements) {
    elements.forEach(e => {
        e.addEventListner('click', (link) => {
            link.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoVeiw({behavior: 'smooth'})
        })
    });
}