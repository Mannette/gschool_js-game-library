// add scripts

$(document).ready(function() {
  console.log('sanity check!');

  var Game = function(title, genre) {
    this.title = title;
    this.genre = genre;
  };

  // Render game when submit button is clicked
  Game.prototype.render = $('#submit').click(function(event) {

    event.preventDefault();

    // Create an array to push multiple genres to
    var genreArr = [];
    // Select user inputed game title
    var gameTitle = $('#game-title').val();
    // Select all checked checkboxes
      // Creates an array
    var gameGenre = $('.genre:checked');

    // Iterates through gameGenre array.
    $.each(gameGenre, function(i) {
      // debugger;
      // Pulls value from index and pushes it to array.
      genreArr[i] = $(this).val();
      console.log(genreArr);
    });

    // Sets each gameTitle to a new game.
    gameTitle = new Game(gameTitle, genreArr);
    console.log(gameTitle);

    // Clears inputs.
    gameGenre.removeAttr('checked');
    $('#game-title').val('');

  });

  var GameLibrary = function(title) {
    this.title = title;
    this.games = [];
  };

  GameLibrary.prototype.render = $('#libraryButton').click(function() {

    // Create new library
    // Give library name
    // Add games to selected library

    var library = $('#newLibrary');

  });








});
