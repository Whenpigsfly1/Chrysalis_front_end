

function blockSkip(video) {

  var supposedCurrentTime = 0;
  video.addEventListener('timeupdate', function() {
    if (!video.seeking) {
          supposedCurrentTime = video.currentTime;
    }
  });

// prevent user from seeking
video.addEventListener('seeking', function() {
  // guard agains infinite recursion:
  // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
  var delta1 = video.currentTime - supposedCurrentTime;
  if (delta1 > 0.01) {
    video.currentTime = supposedCurrentTime;
    alert("Please don't skip forward!");
  }
});
// delete the following event handler if rewind is not required
video.addEventListener('ended', function() {
  // reset state in order to allow for rewind
    supposedCurrentTime = 0;
});
  
}


 
/*function showSubmit(video){

  video.addEventListener("ended", function(){
    /*console.log(video)
    var test =  document.getElementsByClassName("questions");
    console.log(test);
    console.log(test.length)
    console.log(video)
    console.log(video.id)
    for (let i = 0; i < test.length; i++) {
      console.log(test.item(i));
      console.log(test.item(i).id)
    }*/
     /* var test = document.getElementById(name)
      console.log(test)
      if (test.style.display === "none") {
        test.style.display = "block";
      } 
  });
  }*/

function showSubmit(video){
video.addEventListener("ended", function(){
  var test =  document.getElementById("questions");
  console.log(test);
  if (test.style.display === "none") {
    test.style.display = "block";
  } 
});
}





window.onload = function(){
var video = document.getElementById('video');
var form = document.getElementById("form");
console.log(form);
if (video)
 {
  //blockSkip(video);
  showSubmit(video)
}
  /*var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');
console.log(video1)
console.log(video2)
console.log(video3)
console.log(video4)
if (video1) {
 // blockSkip(video1)
 console.log('hi')
}

if (video2) {
  blockSkip(video2)
}

if (video3) {
  blockSkip(video3)
}

if (video4) {
  blockSkip(video4)
}
if (video1){
  showSubmit(video1);
}

if (video2){
  showSubmit(video2);
}

if (video3){
  showSubmit(video3);
}

if (video4){
  showSubmit(video4);
}*/
};
