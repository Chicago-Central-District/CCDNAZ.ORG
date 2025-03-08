document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".mission-section");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (window.scrollY > 100) {
            // if (cardTop < triggerBottom) {
                card.classList.add("in-view");
                // console.log("done");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});