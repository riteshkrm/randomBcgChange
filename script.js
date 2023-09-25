const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(c, 1000);
  }

  function c() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
