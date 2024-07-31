window.onscroll = function () {
  myFunction();
  myFunction1();
  // myFunction2();
};
function myFunction() {
  const navItem1 = document.querySelectorAll(".QuotesLine1");
  const navItem2 = document.querySelectorAll(".QuotesLine2");
  const slideItem = document.querySelectorAll(".from-right");
  // console.log(slideItem);
  // console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    navItem1.forEach((element) => {
      element.style.animation = "4s linear 1s infinite alternate rotateMotto1";
    });
    navItem2.forEach((element) => {
      element.style.animation = "3s linear 1s infinite alternate rotateMotto2";
    });
  }
  slideItem.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      element.classList.add("visible");
      // element.classList.remove("from-right");
    } else {
      element.classList.remove("visible");
      // element.classList.add("from-right");
    }
  });
}
function myFunction1() {
  const navItem = document.getElementById("NavContainer");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navItem.style.background =
      "linear-gradient(to right, rgba(120, 118, 118, 0.92), rgba(0, 0, 0, 0.863),rgba(120, 118, 118, 0.92))";
  } else {
    navItem.style.background = "none";
    navItem.style.backgroundColor = "transparent";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  console.log(video);
  video.playbackRate = 0.5; // Set the video playback rate to 0.5 (half speed)
});
// function myFunction2(e) {
//   const movingItem = document.querySelectorAll("#circular");
//   console.log(movingItem);
//   movingItem.forEach((element) => {
//     const rect = element.getBoundingClientRect();
//     if (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     ) {
//       element.classList.add("circular-move");
//     } else {
//       element.classList.remove("circular-move");
//     }
//   });
// }
