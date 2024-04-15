const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove"|| "touchmove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const heartElement = document.createElement("span");
  heartElement.style.left = xPos + "px";
  heartElement.style.top = yPos + "px";
  const size = Math.random() * 150;
  heartElement.style.width = size + "px";
  heartElement.style.height = size + "px";

  bodyElement.appendChild(heartElement);
  setTimeout(() => {
    heartElement.remove();
  }, 1000);
});
