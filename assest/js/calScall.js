const calScal = document.getElementById("calScal");
const range = document.getElementById("range");
const container = document.getElementById("container");
// const value = calScal.value;
calScal.addEventListener("input", (e) => {
  const value = e.target.value;
  //   console.log("message");
  range.innerText = Math.round(value / 10);
  if (value == 10) {
    container.style.transform = `scale(1)`;
  } else {
    container.style.transform = `scale(1.0${value})`;
  }
  updateHandlePosition();
});

// update range popup --------------------------------
function updateHandlePosition() {
  const value = calScal.value;
  //   console.log(value);
  const min = calScal?.min ? calScal?.min : 0;
  const max = calScal?.max ? calScal?.max : 100;

  // Calculate the percentage of the current value
  const percentage = (value - min) / (max - min);
  //   console.log(percentage);
  // Get the width of the container
  const containerWidth = calScal?.offsetWidth;

  // Calculate the left position of the handle
  const left = percentage * containerWidth;
  const marginLeft = left / 10;
  //   console.log(left / 10);

  // Set the handle's position
  range.style.left = `${left}px`;
  range.style.marginLeft = `-${marginLeft}px`;
}

updateHandlePosition();
// console.dir(calScal.offsetWidth);
