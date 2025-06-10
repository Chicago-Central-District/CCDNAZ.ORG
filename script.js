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


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".text-container");

    function checkScroller() {
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

    window.addEventListener("scroll", checkScroller);
    checkScroller();
});


document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner");

    function checkScrolly() {
        const triggerBottom = window.innerHeight * 0.85;
        banners.forEach(banner => {
            const bannerTop = banner.getBoundingClientRect().top;
            if (window.scrollY > 100) {
            if (bannerTop < triggerBottom) {
                banner.classList.add("in-view");
                // console.log("done");
            }
        }
        });
    }

    window.addEventListener("scroll", checkScrolly);
    checkScrolly();
});

document.addEventListener("DOMContentLoaded", function () {
    const objects = document.querySelectorAll(".banner-2");

    function checkScrolls() {
        const triggerBottom = window.innerHeight * 0.85;
        objects.forEach(object => {
            const objectTop = object.getBoundingClientRect().top;
            if (window.scrollY > 100) {
            if (objectTop < triggerBottom) {
                object.classList.add("in-view");
                // console.log("done");
            }
        }
        });
    }

    window.addEventListener("scroll", checkScrolls);
    checkScrolls();
});

document.addEventListener("DOMContentLoaded", function () {
    const things = document.querySelectorAll(".banner-3");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        things.forEach(thing => {
            const thingTop = thing.getBoundingClientRect().top;
            if (window.scrollY > 100) {
            if (thingTop < triggerBottom) {
                thing.classList.add("in-view");
                // console.log("done");
            }
        }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});