//Snap Scrolling effect

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector(".myImageContainer");
    const secondary = document.querySelector(".remainingBodyContainer");

    let isScrolling = false;

    window.addEventListener("wheel", function (e) {
        if (isScrolling) return;

        const scrollY = window.scrollY;
        const screenHeight = window.innerHeight;

        isScrolling = true;

        if (scrollY < screenHeight / 2 && e.deltaY > 0) {
            // Scroll down to center secondary
            const targetOffset = secondary.offsetTop - (screenHeight / 2) + (secondary.offsetHeight / 2);
            window.scrollTo({ top: targetOffset, behavior: "smooth" });
        } else if (scrollY >= secondary.offsetTop - screenHeight / 2 && e.deltaY < 0) {
            // Scroll up to center main
            const targetOffset = main.offsetTop - (screenHeight / 2) + (main.offsetHeight / 2);
            window.scrollTo({ top: targetOffset, behavior: "smooth" });
        }

        setTimeout(() => {
            isScrolling = false;
        }, 800);
    });
});

