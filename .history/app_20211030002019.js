$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')

    })

    // Setting owl coursel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        item:1,
        dots:false,
        loop:true,
        nav:true,
        navText: navText,
        autoplayHoverPause: true,
    })
})