var socket = io.connect();
let remaining = 30;
let previousRandom = 0;
let random = 0;
var promptWeGot;

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})

var textToShow = ['Build your happy place.', 'How does your first memory feel?', 'Describe your next travel destination, real or imagined.', 'What has your day looked like so far?', 'What does home look like?', 'How does your regular commute feel?', 'Describe what sounds you’re hearing right now.']
    $(document).ready(function() {
        random = Math.floor(Math.random()*textToShow.length)
        promptWeGot = textToShow[random]

        $(".prompt_projection").html(promptWeGot);
        console.log(textToShow);


        setInterval(function(){ //interval loop, every second.
        remaining -- //count down

        $('#countdown').html(remaining) //set the html to be the countdown

        if(remaining <=0){ //if were less than 0 seconds, reset.
          //out of time....
          remaining = 30; //set back to 30

          //dont let the random # repeat
          while( random == previousRandom){ //while the new random number is the same as the previous try again until they are not the same
            random = Math.floor(Math.random()*textToShow.length)
          }

          previousRandom = random; // set the current random to the previous for checking next time

          promptWeGot = textToShow[random] //grab the prompt
          $(".prompt_projection").html(promptWeGot); // render it to the screen.


        }

      },1000) //every second.


      });

    // $(document).ready(function() {
    //     setInterval(function() {
    //       cache_clear()
    //     }, 30000);
    //     console.log(setInterval);
    //   });
    //
    //   function cache_clear() {
    //     window.location.reload(true);
    //   }

//       (function countdown(remaining) {
//     if(remaining <= 0)
//         location.reload(true);
//     document.getElementById('countdown').innerHTML = remaining;
//     setTimeout(function(){ countdown(remaining - 1); }, 1000);
// })(30); // 5 seconds

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
