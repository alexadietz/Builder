var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})

var surveyAnswers = {
  blackfillshape:'triangle', //set this to NULL if you want to use an error message instead of a default.
  color:'red',
  fillpattern:'solid'
} //empty json object to store our answers before sending to the server.

// SECTION ONE - FILL
$('.triangle').click(function(event){
  surveyAnswers.blackfillshape = "triangle" //store the the answers in the json object we created above. This re-fills the blackfillshape key/value pair (this resets the value to "triangle" instead of null!)
  console.log(surveyAnswers);
  $('.blackfill_shapes_size').css('opacity',1) //reset the opacity for everything
  $('.triangle').css('opacity',0.5) //reset the opacity for this specific one.
})

$('.squiggle').click(function(event){
  surveyAnswers.blackfillshape = "squiggle"
  console.log(surveyAnswers);
  $('.blackfill_shapes_size').css('opacity',1)
  $('.squiggle').css('opacity',0.5)
})

$('.rectangle').click(function(event){
  surveyAnswers.blackfillshape = "rectangle"
  console.log(surveyAnswers);
  $('.blackfill_shapes_size').css('opacity',1)
  $('.rectangle').css('opacity',0.5)
})

$('.circle').click(function(event){
  surveyAnswers.blackfillshape = "circle"
  console.log(surveyAnswers);
  $('.blackfill_shapes_size').css('opacity',1)
  $('.circle').css('opacity',0.5)
})

$('.burst').click(function(event){
  surveyAnswers.blackfillshape = "burst"
  console.log(surveyAnswers);
  $('.blackfill_shapes_size').css('opacity',1)
  $('.burst').css('opacity',0.5)
})

// SECTION TWO - COLOR
$('.red').click(function(event){
  surveyAnswers.color = "red"
  console.log(surveyAnswers);
  $('.color').css('opacity',1)
  $('.red').css('opacity',0.5)
})

$('.orange').click(function(event){
  surveyAnswers.color = "orange"
  console.log(surveyAnswers);
  $('.color').css('opacity',1)
  $('.orange').css('opacity',0.5)
})

$('.green').click(function(event){
  surveyAnswers.color = "green"
  console.log(surveyAnswers);
  $('.color').css('opacity',1)
  $('.green').css('opacity',0.5)
})

$('.blue').click(function(event){
  surveyAnswers.color = "blue"
  console.log(surveyAnswers);
  $('.color').css('opacity',1)
  $('.blue').css('opacity',0.5)
})

$('.purple').click(function(event){
  surveyAnswers.color = "purple"
  console.log(surveyAnswers);
  $('.color').css('opacity',1)
  $('.purple').css('opacity',0.5)
})


// SECTION THREE - PATTERN
$('.solid').click(function(event){
  surveyAnswers.fillpattern = "solid"
  console.log(surveyAnswers);
  $('.fill_patterns_height').css('opacity',1)
  $('.solid').css('opacity',0.5)
})

$('.dashes').click(function(event){
  surveyAnswers.fillpattern = "dashes"
  console.log(surveyAnswers);
  $('.fill_patterns_height').css('opacity',1)
  $('.dashes').css('opacity',0.5)
})

$('.dots').click(function(event){
  surveyAnswers.fillpattern = "dots"
  console.log(surveyAnswers);
  $('.fill_patterns_height').css('opacity',1)
  $('.dots').css('opacity',0.5)
})

$('.grid').click(function(event){
  surveyAnswers.fillpattern = "grid"
  console.log(surveyAnswers);
  $('.fill_patterns_height').css('opacity',1)
  $('.grid').css('opacity',0.5)
})


$('.done').click(function(){
  console.log('done!');

  //if we have values in each of the key/value slots in the json object, then were ready to procede
  if(surveyAnswers.fillpattern && surveyAnswers.color && surveyAnswers.blackfillshape){
    console.log("we have all 3, good to go");
    socket.emit('sendSurveyAnswers', surveyAnswers) //send the info up to the server.

  }else{ //if we dont the values, throw some sort of error. //maybe you setup defaults instead?
    console.log("missing some selections....");
    //deal with an error message to the user somehow?
  }

  // $(document).ready(function() {
  //   setInterval(function() {
  //     cache_clear()
  //   }, 3000);
  // });
  //
  // function cache_clear() {
  //   window.location.reload(true);
  //   // window.location.reload(); use this if you do not remove cache
  // }


})
