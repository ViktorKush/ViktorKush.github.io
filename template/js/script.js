    $(function() {
    var images = [
        'img/changed/product1.png',
        'img/changed/product2.png',
        'img/changed/product3.png',
        'img/changed/product4.png',
        'img/changed/product5.png',
        'img/changed/product6.png',
        'img/changed/product7.png',
        'img/changed/product8.png',
        'img/changed/product9.png',
        'img/changed/product10.png'
    ]
            $(".changeback").mouseenter(function() {
        var newUrl = 'url("img/changed/product' +$(this).css("background-image").split("product")[1];
        $(this).css("background-image", newUrl).css("background-size", "100% 100%");
})
    $(".changeback").mouseleave(function() {
        var newUrl = 'url("img/product' +$(this).css("background-image").split("product")[1];
        $(this).css("background-image", newUrl).css("background-size", "100% 100%");
})
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
