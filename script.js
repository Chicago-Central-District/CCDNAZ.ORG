document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});