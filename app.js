if (window.innerWidth < 768) {
  console.log('True');
  // Hide the desktop video and show the mobile video
  document.getElementById("desktopVideo").style.visibility = "none"
  document.getElementById("mobileVideo").style.display = "block";
}


const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 20000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;
// let animationFrameId = null;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
  // updateVideoCurrentTime();
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

// function updateVideoCurrentTime() {
//   delay += (scrollpos - delay) * accelamount;
//   console.log(scrollpos, delay);
//   video.currentTime = delay;

//   animationFrameId = window.requestAnimationFrame(updateVideoCurrentTime);
// }

// function stopAnimation() {
//   if (animationFrameId) {
//     window.cancelAnimationFrame(animationFrameId);
//   }
// }


function changeBodyClass(newClass) {
  document.body.className = newClass;
}