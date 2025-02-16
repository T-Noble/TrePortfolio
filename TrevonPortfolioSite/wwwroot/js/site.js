var lastScroll = 0; //Set last scroll
var isScrolling = false; // Prevent overlapping scroll animations
var scrollMovement;

$(document).ready(function () {
    //On wheel events, trigger our scroll effect
    $(window).on("wheel touchmove keydown", function (e) {
        if (isScrolling) {
            e.preventDefault(); // Prevents the default scrolling behavior
            return false;
        }
    
        isScrolling = true; // Block further scrolls
    
        pageScroll(e); // Call your scroll logic
    
        setTimeout(() => {
            isScrolling = false; // Allow scrolling again after processing
        }, 900); // Adjust the delay if needed
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

        // window.scrollTo({
        //     top: sectionHeights[targetIndex].height_top
        //     ,behavior: "instant"
        // });
        window.scrollTo({
            top: sectionHeights[targetIndex].height_top,
            left: 0,
            behavior: "smooth",
          });
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo

        requestAnimationFrame(() => {
            // Allow next scroll after a short delay to complete the animation
            setTimeout(() => {
                isScrolling = false;
            }, 3000);
        });
    }
}

function fetchSectionHeights() {
    let aboutPage = $("#About-page");
    let sqlPage = $("#Sql-page");
    let projectsPage = $("#Projects-page");
    let contactsPage = $("#Contact-page");

    var sections = [
        {
            name: "Banner-Section",
            height_top: 0,
            height_bottom: aboutPage.offset().top
            //document.querySelector("#About-page").offsetTop
        },
        {
            name: "About-Section",
            height_top: aboutPage.offset().top,
            height_bottom: sqlPage.offset().top
            //document.querySelector("#About-page").offsetTop
        },
        {
            name: "Sql-Section",
            height_top: sqlPage.offset().top,
            height_bottom: projectsPage.offset().top
            //document.querySelector("#Sql-page").offsetTop
        },
        {
            name: "Projects-Section",
            height_top: projectsPage.offset().top,
            height_bottom: contactsPage.offset().top
            //document.querySelector("#Projects-page").offsetTop
        },
        {
            name: "Contact-Section",
            height_top: contactsPage.offset().top,
            height_bottom: $(document).height() - $(window).height() //contactsPage.offset().top + window.screen.availHeight
            //document.querySelector("#Contact-page").offsetTop
        }
    ]
    return sections;
}

function scrollToSpecificSection() {
    /*
        $("html, body").animate({
        scrollTop: $("#myElement").offset().top
    }, 500); // 500ms smooth scroll
    */
}