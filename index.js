const img = document.querySelector(".slider__image");

const input = document.querySelector(".slider__input");
input.addEventListener(
  "input",
  _.debounce(() => {
    img.style.width = input.value + "%";
    img.style.height = input.value + "%";
  }, 300)
);

const box = document.querySelector("#box");

document.addEventListener(
  "mousemove",
  _.debounce((event) => {
    /*  const basePositionMouse = );  */
console.log(event.clientX, event.clientY);

    const x = event.clientX - box.offsetWidth / 2;
    const y = event.clientY - box.offsetHeight / 2;
    box.style.left = x + "px";
    box.style.top = y + "px";
  }, 50)
);
