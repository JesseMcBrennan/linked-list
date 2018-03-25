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
});

$('#read-button').on('click', function() {
  $('#read-button').toggleClass('#colorred');
});


      `<article class="cards">
        <h2 id="output-title-two">The Website Title</h2>
        <hr>
        <a href="${$websiteUrl.val()}">www.thewebsiteurl.com</a>
        <hr>
        <button class="bookmarks-button" class="colorred" id="read-button">Read</button>
        <button class="bookmarks-button" id="delete-button">Delete</button>
      </article>`


// $('bookmarkTitle').on('keypress', function() {

// })

// websiteUrl.addEventListener('input', function() {

// });

// submitButton.addEventListener('click', function() {
//    bookmarkTitle.value = outputWebTitle.innerText
// });

//Functions




//Notes
