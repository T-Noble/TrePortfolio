var lastScroll = 0; //Set last scroll
var isScrolling = false; // Prevent overlapping scroll animations

$(document).ready(function () {
    //On wheel events, trigger our scroll effect
    $(window).on("wheel", function (e) {
        if (!isScrolling) {
            pageScroll(e);
        }
    });
})

function pageScroll(e) {
    isScrolling = true; // Block multiple triggers

    // Get section heights
    var sectionHeights = fetchSectionHeights();
    var scroll_y = window.scrollY;
    var scrollY_direction = scroll_y - lastScroll;
    lastScroll = scroll_y; // Update for next event

    let sectionIndex = -1;

    // Find the current section
    for (let i = 0; i < sectionHeights.length; i++) {
        if (scroll_y >= sectionHeights[i].height_top && scroll_y <= sectionHeights[i].height_bottom) {
            sectionIndex = i;
            break;
        }
    }

    if (sectionIndex !== -1) {
        let targetIndex = sectionIndex;

        if (scrollY_direction > 0 && sectionIndex < sectionHeights.length - 1) {

            targetIndex = sectionIndex + 1; //scroll down

            // Scroll down to the next section
            // window.scrollTo({
            //     top: sectionHeights[sectionIndex + 1].height_top,
            //     behavior: "smooth"
            // });
        }
        else if (scrollY_direction < 0 && sectionIndex > 0) {

            targetIndex = sectionIndex - 1; //scroll up
            // Scroll up to the previous section
            // window.scrollTo({
            //     top: sectionHeights[sectionIndex - 1].height_top,
            //     behavior: "smooth"
            // });
        }

        window.scrollTo({
            top: sectionHeights[targetIndex].height_top,
            behavior: "smooth"
        });

        requestAnimationFrame(() => {
            // Allow next scroll after a short delay to complete the animation
            setTimeout(() => {
                isScrolling = false;
            }, 450);
        });
    }
}

function fetchSectionHeights() {
    var sections = [
        {
            name: "Banner-Section",
            height_top: 0,
            height_bottom: document.querySelector("#About-page").offsetTop
        },
        {
            name: "About-Section",
            height_top: document.querySelector("#About-page").offsetTop,
            height_bottom: document.querySelector("#Sql-page").offsetTop
        },
        {
            name: "Sql-Section",
            height_top: document.querySelector("#Sql-page").offsetTop,
            height_bottom: document.querySelector("#Projects-page").offsetTop

        },
        {
            name: "Projects-Section",
            height_top: document.querySelector("#Projects-page").offsetTop,
            height_bottom: document.querySelector("#Contact-page").offsetTop
        },
        {
            name: "Contact-Section",
            height_top: document.querySelector("#Contact-page").offsetTop,
            height_bottom: document.querySelector("#Contact-page").offsetTop + window.screen.availHeight
        }
    ]
    return sections;
}