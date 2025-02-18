var particleCount = 300;

var numberOfParticlesOne = particleCount;
var numberOfParticlesTwo = particleCount;
var numberOfParticlesThree = particleCount;



const createAndAnimateParticlesOne = () => {
    var particles = document.createElement("div");
    document.body.appendChild(particles);
    particles.classList.add("particles");

    const maxX = window.innerWidth - particles.clientWidth;
    const maxY = window.innerHeight - particles.clientHeight;

    const moveParticlesOne =  () => {
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        particles.style.right = `${randomX}px`;
        particles.style.bottom = `${randomY}px`;

        setTimeout(moveParticlesOne, Math.random() * 300000);
    };

    moveParticlesOne();
};

const createAndAnimateParticlesTwo = () => {
    var particles2 = document.createElement("div");
    document.body.appendChild(particles2);
    particles2.classList.add("particles2");

    const maxX2 = window.innerWidth - particles2.clientWidth;
    const maxY2 = window.innerHeight - particles2.clientHeight;

    const moveParticlesTwo =  () => {
        const randomX2 = Math.random() * maxX2;
        const randomY2 = Math.random() * maxY2;

        particles2.style.right = `${randomX2}px`;
        particles2.style.bottom = `${randomY2}px`;

        setTimeout(moveParticlesTwo, Math.random() * 300000);
    };

    moveParticlesTwo();
};

const createAndAnimateParticlesThree = () => {
    var particles3 = document.createElement("div");
    document.body.appendChild(particles3);
    particles3.classList.add("particles3");

    const maxX3 = window.innerWidth - particles3.clientWidth;
    const maxY3 = window.innerHeight - particles3.clientHeight;

    const moveParticlesThree =  () => {
        const randomX3 = Math.random() * maxX3;
        const randomY3 = Math.random() * maxY3;

        particles3.style.right = `${randomX3}px`;
        particles3.style.bottom = `${randomY3}px`;

        setTimeout(moveParticlesThree, Math.random() * 300000);
    };

    moveParticlesThree();
};



for (let i = 0; i < numberOfParticlesOne; i++) {
    createAndAnimateParticlesOne();
}
for (let j = 0; j < numberOfParticlesTwo; j++) {
    createAndAnimateParticlesTwo();
}
for (let k = 0; k < numberOfParticlesThree; k++) {
    createAndAnimateParticlesThree();
}


window.addEventListener("resize", () => {
    document.querySelectorAll(".particles").forEach(particle => {
        particle.style.right = `${Math.random() * window.innerWidth}px`;
        particle.style.bottom = `${Math.random() * window.innerHeight}px`;
    });
    document.querySelectorAll(".particles2").forEach(particle2 => {
        particle2.style.right = `${Math.random() * window.innerWidth}px`;
        particle2.style.bottom = `${Math.random() * window.innerHeight}px`;
    });
    document.querySelectorAll(".particles3").forEach(particle3 => {
        particle3.style.right = `${Math.random() * window.innerWidth}px`;
        particle3.style.bottom = `${Math.random() * window.innerHeight}px`;
    });
})


/*
.particles{
    background-color: white;
    width: 1px;
    height: 1px;
    position: absolute;
    transition: 5s all;
}
.particles2{
    background-color: var(--light-blue);
    width: 2px;
    height: 2px;
    position: absolute;
    transition: 5s all;
}
.particles3{
    background-color: var(--dark-blue);
    width: 3px;
    height: 3px;
    position: absolute;
    transition: 5s all;
}
*/