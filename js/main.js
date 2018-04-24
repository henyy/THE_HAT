//NAVIGATION SCROLLING EFFECT
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

//PHOTO GALLERY
function successPhoto(photoData) {
    console.log(photoData);
}

var url_photo = "https://sheetsu.com/apis/v1.0su/26c86ee136ea";
$.ajax({
    url: url_photo,
    success: successPhoto
}).done(function (photoData) {

var i;
for (i = 0; i < photoData.length; i++) { 
    $('#gallery').append("<div class='col-md-4' style='padding-bottom: 40px'><div class='thumbnail'><a href='" + photoData[i].THUMBNAIL + "' target='_blank'><img src='" + photoData[i].IMAGE + "' style='width:100%'><div class='caption'><p>" + photoData[i].CAPTION + "</p></div></a></div></div>");
}
});
