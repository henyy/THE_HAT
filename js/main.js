//NAVIGATION SCROLLING EFFECT
      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('.navi').addClass('black');
              $('.nav-link').addClass('black');
              $('.navbar-toggler').addClass('black');
        }

        else {
              $('.navi').removeClass('black');
              $('.nav-link').removeClass('black');
              $('.navbar-toggler').removeClass('black');
        }
  })

//PHOTO GALLERY
  $(document).ready(function () {

    $.ajax({
    type: "GET",
    url: "https://sheets.googleapis.com/v4/spreadsheets/11A_mMEluRZuVKcS953cAJtJB1NrrLZRgRM9lJsbwBic/values/A1%3AC1000?fields=values&key=AIzaSyD-dvq1JhQ4IquiWxmzu-RFNS0GZWEeqDo",
    success: function(result)
    {
    console.log(result.values);

  //  var i;
//for (i = 1; i < result.values.length; i++) { 
  //  $('#gallery').append("<div class='col-md-4' style='padding-bottom: 40px'><div class='thumbnail'><a href='" + result.values[i][0] + "' target='_blank'><img src='" +  result.values[i][1] + "' style='width:100%'><div class='caption'><p>" + result.values[i][2] + "</p></div></a></div></div>");

  var i;
  for (i = 1; i < result.values.length; i++) { 
      //$('#gal').append("<div class='col-md-4'><div class='card'><a class='lightbox' href='img/" + result.values[i][0] + "koira.jpg'><img src='img/" + result.values[i][0] + "koira.jpg' alt='Park' class='card-img-top'></a></div></div>");
      $('#gallery').append("<a href='img/backstage/hat (" + result.values[i][0] + ").jpg' data-lightbox='roadtrip'><img class='thumbnail' src='img/backstage/hat (" + result.values[i][0] + ").jpg' alt='Park'></a>");
  }
}
    });


//TEAM
$.ajax({
    type: "GET",
    url: "https://sheets.googleapis.com/v4/spreadsheets/1h2zrHmPEuvXqoICZbqMdNGpRpD-GTElgsIOM_sql6u0/values/A1%3AD1000?fields=values&key=AIzaSyD-dvq1JhQ4IquiWxmzu-RFNS0GZWEeqDo",
    success: function(teamResult)
    {
    console.log(teamResult.values);

    var i;
    for (i = 1; i < teamResult.values.length; i++) { 
        $('#team').append("<figure class='team-figure'><img width=200px height=200px src='"+ teamResult.values[i][3]  +"'><figcaption class='break'><div style='font-weight: bold;'>" + teamResult.values[i][0] + " " + teamResult.values[i][1] + "</div>" + teamResult.values[i][2] + "</figcaption></figure>");
    }
}
    });

   
//STORY    
    $.ajax({
        type: "GET",
        url: "https://sheets.googleapis.com/v4/spreadsheets/11A_mMEluRZuVKcS953cAJtJB1NrrLZRgRM9lJsbwBic/values/STORY!A1%3AC1000?fields=values&key=AIzaSyD-dvq1JhQ4IquiWxmzu-RFNS0GZWEeqDo",
        success: function(storyResult)
        {
        console.log(storyResult.values);
        $('#synopsis1').append(storyResult.values[1][0])
        $('#synopsis2').append(storyResult.values[2][0])
        $('#character1').append(storyResult.values[3][0])
        $('#character2').append(storyResult.values[4][0])
    
        }
        });

    });


    //SCROLLDOWN

    $(function() {
        $('.scroll-down').click (function() {
          $('html, body').animate({scrollTop: $('section.roll').offset().top }, 'slow');
          return false;
        });
      });



/*
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

//STORY
function successStory(storyData) {
    console.log(storyData);
}

// Read whole spreadsheet
var url_story = "https://sheetsu.com/apis/v1.0su/29f488da106f";
$.ajax({
    url: url_story,
    success: successStory
}).done(function (storyData) {
    $('#synopsis1').append(storyData[0].STORY)
    $('#synopsis2').append(storyData[1].STORY)
    $('#character1').append(storyData[2].STORY)
    $('#character2').append(storyData[3].STORY)
});*/