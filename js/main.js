      // Scrolling Effect

      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('.navi').addClass('black');
              $('.nav-link').addClass('black');
              $('.navbar-brand').addClass('black');
        }

        else {
              $('.navi').removeClass('black');
              $('.nav-link').removeClass('black');
              $('.navbar-brand').removeClass('black');
        }
  })

//GOOGLE SHEETS
function successFunc(data) {
    console.log(data);
}

// Read whole spreadsheet
var url = "https://sheetsu.com/apis/v1.0su/6e3eb4341f26";
$.ajax({
    url: url,
    success: successFunc
}).done(function (data) {
    $('#testi').append(data[0].TEKSTI)
    $('#testi1').append(data[1].TEKSTI)
});
