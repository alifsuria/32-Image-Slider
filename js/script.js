const changer = document.querySelector("#changer");
const display = document.querySelector("#display");

changer.addEventListener("click", (event) => {
  event.preventDefault();
  let redColor = Math.round(Math.random() * 255);
  let greenColor = Math.round(Math.random() * 255);
  let blueColor = Math.round(Math.random() * 255);

  display.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;

  console.log(redColor, greenColor, blueColor);
});
