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


//Event Listeners

$('#enter').on('click', function() {
 var outputTitle = $('#title-input').val();
 $('.output-title').text(outputTitle);
 var outputURL = $('#url-input').val();
 $('.output-url').text(outputURL);
 $(".container-right").append("");
});

$('#read-button').on('click', function() {
$(this).toggleClass('colorred');
});





 var card = $(`<article class="cards">
        <h2 id="output-title-two">${$outputTitle}</h2>
        <hr>
        <a href="${$outputURL}">${$outputURL}</a>
        <hr>
        <button class="bookmarks-button" class="colorred" id="read-button">Read</button>
        <button class="bookmarks-button" id="delete-button">Delete</button>
      </article>`)*/






// // websiteUrl.addEventListener('input', function() {

// });

// submitButton.addEventListener('click', function() {
//    bookmarkTitle.value = outputWebTitle.innerText
// });

//Functions




//Notes
