$(function () {
    $("#owl-demo").owlCarousel({

        navigation : true,
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem : true,
        rewindSpeed: 900,
        autoPlay: false,
        stopOnHover : true
    });
    $("#owl-demo1").owlCarousel({
        navigation : false,
        slideSpeed : 30,
        paginationSpeed : 40,
        singleItem : true,
        rewindSpeed: 300,
        autoPlay: false
    });
});
