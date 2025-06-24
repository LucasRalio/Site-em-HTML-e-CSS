function toggleCard(button) {
    const card = button.parentElement;
    const content = card.querySelector('.accordion-content');
    const allCards = document.querySelectorAll('.card');

    allCards.forEach((c) => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });

    if (card.classList.contains('active')) {
        card.classList.remove('active');
    } else {
        card.classList.add('active');
    }
}
