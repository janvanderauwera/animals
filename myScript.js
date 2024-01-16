function myFunction(waarde) {
  let animal;
  let roar;     
    

 /* 
  if (waarde == 1) {
animal = "dog.png"
  }
  else {
if (waarde == 2){
  animal = "cat.png"
}
else {
  animal = "canary.png"
}

  }
 
 */

/* een betere manier om te kiezen tussen meer dan 2 mogelijkheden is de switch*/

switch (waarde){
case 1: 
animal = "dog.png";
roar = "dog.wav";
break;

case 2:
animal = "cat.png";
roar = "cat.mp3";
break;

case 3:
animal = "canary.png";
roar = "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
break;

case 4:
animal = "tiger.png";
roar = "tiger.wav";
break;

}


    document.getElementById("myImage").src = animal;
    document.getElementById("audio").src = roar;


    let audio = document.getElementById("audio");
        audio.play();
    
  }