
(function (window) {
  var helloSpeaker={};
  var speakWord = "Hello";
  helloSpeaker.speak=function (name) {
  		console.log(speakWord + " " + name);
  	// body...
  }
  window.helloSpeaker=helloSpeaker;
})(window);

