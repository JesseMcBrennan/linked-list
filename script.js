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
 var outputTitle = $('#title-input').val();
 $('.output-title').text(outputTitle);
 var outputURL = $('#url-input').val();
 $('.output-url').text(outputURL);
 $('#title-input').val() = "";
var allArticles = document.querySelectorAll('article')
 console.log(allArticles.length);
});

$('section').on('click', '.cards .bookmarks-button', function() {
$(this).toggleClass('colorred');
});

function prependCard(event) { 
  $(".container-right").append(`<article class="cards">
        <h2 id="output-title-two">${$outputTitle.val()}</h2>
        <hr>
        <a href="${$outputURL.val()}">${$outputURL.val()}</a>
        <hr>
        <button class="bookmarks-button" class="colorred" id="read-button">Read</button>
        <button class="bookmarks-button" id="delete-button">Delete</button>
      </article>`)
};

$('allArticles').l


//Functions




//Notes

//use .closest 
