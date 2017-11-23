$(function () {
    var quantity = 1,
        pallet = '<div class="col col-xs-12 col-sm-12 col-md-12 col-lg-5 text-center"> <fieldset name="number"> <legend>Number of pallets:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Kg</span> </div> </fieldset> </div> <div class="col  col-xs-12 col-sm-12 col-md-12 col-lg-3 text-center"> <fieldset name="height"> <legend>Height:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Cm</span> </div> </fieldset> </div> <div class="col col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center"> <fieldset name="weight"> <legend>Weight for pallet:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Cm</span> </div> </fieldset> </div>',
        parcel = '<div class="col col-xs-12 col-sm-6 col-md-3 text-center"> <fieldset name="weight"> <legend>Weight:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Kg</span> </div> </fieldset> </div> <div class="col col-xs-12 col-sm-6 col-md-3 text-center"> <fieldset name="length"> <legend>Length:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Cm</span> </div> </fieldset> </div> <div class="col col-xs-12 col-sm-6 col-md-3 text-center"> <fieldset name="width"> <legend>Width:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Cm</span> </div> </fieldset> </div> <div class="col col-xs-12 col-sm-6 col-md-3 text-center"> <fieldset name="height"> <legend>Height:</legend> <div class="input-group"> <input type="text" class="form-control" aria-describedby="basic-addon2"> <span class="input-group-addon" id="basic-addon2">Cm</span> </div> </fieldset> </div>';
    $(".onoffswitch").on("change", function () {
        var toggleContent = $(this).parent().parent().siblings();
        if ($(toggleContent).hasClass('pallet')) {
            $(toggleContent).html(parcel)
            $(toggleContent).removeClass("pallet").addClass("parcel")
        } else {
            $(toggleContent).html(pallet);
            $(toggleContent).addClass("pallet").removeClass("parcel");
        }
    });
    function add() {
        $("#add-button").click(function () {
            var clone = $(".block-wrapper").last().clone(true);
            $(".block-wrapper").last().before(clone).find(".onoffswitch").html('<input type="checkbox" name="onoffswitch' + quantity + '" class="onoffswitch-checkbox" id="myonoffswitch' + quantity + '" checked><label class="onoffswitch-label" for="myonoffswitch' + quantity + '"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label>');
            quantity++;
        });
    }
    add();
    $("#remove-button").click(function () {
        if (quantity > 1) {
            $("#form .block-wrapper").last().remove();
            quantity--;
        } else {
            console.log("no-no-no-no-no");
        }
    })
    $("#submit").click(function () {
        var fields = $(this).parents("#form").find("input, textarea, text").not("[type='submit']"),
            validated = true,
            toConsole = $("#sender").text() + " " + $("#recipient").text() + " ";

        for (var i = 0; i < fields.length; i++) {
            validated = validated && (fields[i].value !== '');
            toConsole += fields[i].value + " "
        }
        if (!validated) {
            alert('Fill the fields');
        }
        console.log(toConsole);
    })
    $('.dropdown-toggle').dropdown()
    $(".dropdown-menu a").click(function () {
        $(this).parents(".input-group-btn").find("button").text($(this).text())
    })
})

//    document.getElementById("add-button").onclick = addAnother();
//        function addAnother() {
//        document.getElementById("block-wrapper").appendChild(document.getElementById("#block-wrapper").cloneNode(true))
//        quantity++;
//    }
