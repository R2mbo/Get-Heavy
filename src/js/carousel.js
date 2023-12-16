$('.owl-carousel').owlCarousel({
    stagePadding: 20,
    loop: false,
    margin: 25,
    autoWidth: true,
    autoHeight: true,
    nav: true,
    dots: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

