const click = new Audio("../../click.MP3");
click.preload = "auto";

const keyPad = document.getElementById("keyPad");
// console.log(keyPad);

keyPad.addEventListener("click", (e) => {
  const result = e.target.matches(".button") || e.target.matches(".button1");
  //   console.dir(result);
  if (result) {
    click.play().catch((err) => {
      console.dir(err);
    });
  }
});
