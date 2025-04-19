document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".assembly-block, .themed-section");
  
    const observerOptions = {
      threshold: 0.1,
    };
  
    const fadeInOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
  
    faders.forEach(fader => {
      fadeInOnScroll.observe(fader);
    });
  });
  