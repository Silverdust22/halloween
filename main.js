const audio = document.getElementById("audio");
const img = document.getElementById("img2");
const title = document.getElementById("title");

function playAudio(){
  audio.play();
}

function stopAudio(){
  audio.pause();
}

function playLoop(){
  audio.loop = true;
  audio.onload();
}

img.addEventListener('click', playAudio);
img.addEventListener('click', playLoop);
img.addEventListener('dblclick', stopAudio);
img.addEventListener('mouseover', playAudio);
img.addEventListener('mouseover', playLoop);
img.addEventListener('mouseout', stopAudio);
title.addEventListener('click', playAudio);
title.addEventListener('dblclick', stopAudio);
title.addEventListener('mouseover', playAudio);
title.addEventListener('mouseout', stopAudio);
title.addEventListener('click', playLoop);
title.addEventListener('mouseover', playLoop);