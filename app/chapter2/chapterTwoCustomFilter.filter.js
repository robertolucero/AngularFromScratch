(function() {
  "use strict";

  angular
    .module("app")
    .filter("toTitleCase", toTitleCase);

  function toTitleCase() {
    function toTitle(text) {
      var words = text.split(' ');
      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(' ');
    }

    return toTitle;
  }
})();
