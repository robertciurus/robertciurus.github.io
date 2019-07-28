
const bgImage = document.querySelector(".jumbotron");

bgImage.addEventListener("mousemove", (e) => {
  bgImage.style.backgroundPositionX = -e.offsetX + "px";
  bgImage.style.backgroundPositionY = -e.offsetY + "px";
});
