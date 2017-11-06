var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})

var textToShow = ['Build your happy place.', 'How does your first memory feel?', 'Describe your next travel destination, real or imagined.', 'What has your day looked like so far?', 'What does home look like?', 'How does your regular commute feel?', 'Describe what sounds you’re hearing right now.']
    $(document).ready(function() {
        $(".prompt_projection").html(textToShow[Math.floor(Math.random()*textToShow.length)]);
        console.log(textToShow);
      });

    $(document).ready(function() {
        setInterval(function() {
          cache_clear()
        }, 30000);
        console.log(setInterval);
      });

      function cache_clear() {
        window.location.reload(true);
      }

      (function countdown(remaining) {
    if(remaining <= 0)
        location.reload(true);
    document.getElementById('countdown').innerHTML = remaining;
    setTimeout(function(){ countdown(remaining - 1); }, 1000);
})(30); // 5 seconds

//when we get a message form the server, act.
socket.on('projectionRouteSurveyAnswers',function(surveyAnswers){
  console.log("projectionRouteSurveyAnswers:", surveyAnswers);

  var rt = Math.random()*600;
  var rl = Math.random()*600;

//generate a new image jQuery object and append to the body. (at a random spot)
  $('<img src="compiledImages/'+ surveyAnswers.blackfillshape+'_'+surveyAnswers.color+'_'+surveyAnswers.fillpattern+'.png" >')
  .css({"position":"absolute","top":rt,"left":rl}).appendTo('body')


})

socket.on('setInterval',function(timer){
  console.log("projectionRoutesetInterval:", timer);

//generate a new image jQuery object and append to the body. (at a random spot)
  // $('<img src="compiledImages/'+ surveyAnswers.blackfillshape+'_'+surveyAnswers.color+'_'+surveyAnswers.fillpattern+'.png" >')
  // .css({"position":"absolute","top":rt,"left":rl}).appendTo('body')


})
