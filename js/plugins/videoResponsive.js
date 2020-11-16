var w = window.matchMedia("(max-width: 700px)");
var vid = document.getElementById("vid");
var source = document.createElement("source");
source.id = "hvid";
source.setAttribute("type", "video/mp4");
vid.appendChild(source);

if (w.matches) {
  vid.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "https://storage.googleapis.com/coverr-main/mp4/Love-Boat.mp4");
  vid.load();
  vid.play();
} else {
  vid.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4");
  vid.load();
  vid.play();
}

window.addEventListener("resize", function(){
var w = window.matchMedia("(max-width: 700px)");
var vid = document.getElementById("vid");
var source = document.getElementById("hvid");

if (w.matches) {
  vid.pause();
  source.src = "https://storage.googleapis.com/coverr-main/mp4/Love-Boat.mp4";
  vid.load();
  vid.play();
} else {
  vid.pause();
  source.src = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";
  vid.load();
  vid.play();
}
});