// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var Game = function(title, genre) {
    this.title = title;
    this.genre = [];
  };

  Game.prototype.render = function() {

  };

  var GameLibrary = function(title, games) {
    this.title = title;
    this.games = [];
  };

  GameLibrary.prototype.render = function() {

  };

});
