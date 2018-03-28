// Variables

//Input Variables

var $bookmarkTitle = $('#title-input');
var $websiteUrl = $('#url-input');

//Button Variables

var $submitButton = $('#enter');
var $readButton = $('#read-button');
var $deleteButton = $('.delete-button');

//Display Variables

var $outputWebTitle = $('.output-title');
var $outputWebUrl = $('.output-url');
var $outputTitle = $('#title-input');
var $outputURL = $('#url-input');


//Event Listeners

$('#enter').on('click', function() {
 prependCard();
 //isWebsiteValid();
 var outputTitle = $('#title-input').val();
 $('.output-title').text(outputTitle);
 var outputURL = $('#url-input').val();
 $('.output-url').text(outputURL);
 $('#title-input').val('');
 $('#url-input').val('');
 cardCounter();
});

$('section').on('click', '.cards .bookmarks-button', function() {
$(this).toggleClass('read');
});

$('main').on('click', '.container-right .cards', function() {
$(this).toggleClass('read-disabled');
});

$('section').on('click', '.cards a', function() {
$(this).toggleClass('read-underline');
});

$('section').on('click', '.cards #delete-button', function() {
$(this).closest('article').remove();
cardCounter();
});


//Functions

$websiteUrl.on('keydown', function() {
  if($websiteUrl.val()> "" && $bookmarkTitle.val()>"")  { 
    console.log($websiteUrl.val())
    console.log($bookmarkTitle.val())
    $submitButton.prop('disabled', false);
  }
});

function cardCounter() {
  var allArticles = document.querySelectorAll('article')
  $('.card-counter').text(allArticles.length);
}

function prependCard(event) { 
  $(".container-right").append(`<article class="cards">
        <h2 id="output-title-two">${$outputTitle.val()}</h2>
        <hr>
        <a href="${$outputURL.val()}">${$outputURL.val()}</a>
        <hr>
        <button class="bookmarks-button" id="read-button">Read</button>
        <button class="bookmarks-button" id="delete-button">Delete</button>
      </article>`)
};

function isWebsiteValid() {
  var linkInput = $('#url-input').val();
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regex.test(linkInput)) {
    prependCard();
  } else {
    alert('That is not a valid URL');
  }
}







