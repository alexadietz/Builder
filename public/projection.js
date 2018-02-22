var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})

var textToShow = ['Build your happy place.', 'How does your first memory feel?', 'Describe your next travel destination, real or imagined.', 'What has your day looked like so far?', 'What does home look like?', 'How does your regular commute feel?', 'Describe what sounds you’re hearing right now.']
    $(document).ready(function() {
        var promptWeGot = textToShow[Math.floor(Math.random()*textToShow.length)]

        $(".prompt_projection").html(promptWeGot);
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

  // console.log();

var sizes = [50,100,150]

  var randSize = sizes[  Math.floor(Math.random()*sizes.length)  ] //get a random index from the sizes array and store it in the randSize variable
  var rt = randomRange($('.topSection').height() , window.innerHeight - randSize); // get a random number between the height of the top section and the height of the screen minus the height of the randSize (the image)
  var rl = randomRange(0,window.innerWidth - randSize) // get a random number between 0 and the width of the screen minus the height of the randSize (the image) (assuming that everything is square)

//generate a new image jQuery object and append to the body. (at a random spot, with a size from the sizes array using injected CSS)
  $('<img src="compiledImages/'+ surveyAnswers.blackfillshape+'_'+surveyAnswers.color+'_'+surveyAnswers.fillpattern+'.png" >')
  .css({"position":"absolute","top":rt,"left":rl,"height":randSize+"px"}).appendTo('body')

})

socket.on('setInterval',function(timer){
  console.log("projectionRoutesetInterval:", timer);

//generate a new image jQuery object and append to the body. (at a random spot)
  // $('<img src="compiledImages/'+ surveyAnswers.blackfillshape+'_'+surveyAnswers.color+'_'+surveyAnswers.fillpattern+'.png" >')
  // .css({"position":"absolute","top":rt,"left":rl}).appendTo('body')


})



function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
