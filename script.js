const btnSizeUp = document.querySelector(".sizeUp");
const btnSizeDown = document.querySelector(".sizeDown");
const btnColor = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;

const textSizeUp = () => {
  if (fontSize >= 60) return; // to not increase it for infinite amount
  fontSize += 4;
  p.style.fontSize = fontSize + "px";
};

const textSizeDown = () => {
  if (fontSize <= 20) return; // to not decrease it for infinite amount
  fontSize -= 4;
  p.style.fontSize = fontSize + "px";
};

const colorRandomizer = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  p.style.color = `rgb(${r},${g},${b})`;
};

btnSizeUp.addEventListener("click", textSizeUp);
btnSizeDown.addEventListener("click", textSizeDown);
btnColor.addEventListener("click", colorRandomizer);
