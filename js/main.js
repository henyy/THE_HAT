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
'use strict';

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
`<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>`
*/
// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
/*
const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  });
};
showImages();
*/

// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((json) => {
        func(json);
    });
};

const templateFunction = (json) => {
    let html = '';
    json.forEach((kuva) => {
        html += `<li>
            <figure>
                <a href="img/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
    });
    const element = document.querySelector('#photos');
    element.innerHTML = html;
};

loadJSON('js/kuvat.json', templateFunction);
