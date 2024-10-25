const outPut = document.querySelector("#outPut");
const numaricPad = document.querySelector("#numaricPad");
let arithMatickey = false;
// console.log(numaricPad);

// numaric pad ---------------------------
numaricPad.addEventListener("click", (element) => {
  //   console.log(element.target.innerText);
  const check = element.target.classList.contains("button");
  if (check) {
    outPutF(element.target.innerText);
  }
});

// // math key -----------------------------
const mathKey = document.getElementById("mathKey");
// console.log(mathKey)
mathKey.addEventListener("click", (element) => {
  const value = element.target.classList.contains("button1");
  console.log(value);
  if (value) {
    if (arithMatickey) {
      outPutF(element.target.innerText);
    }
    arithMatickey = false;
  }
});

// output function ---------------------------
function outPutF(text) {
  if (outPut.innerText === "0.00" || outPut.innerText === "0") {
    outPut.innerText = "";
  }
  outPut.innerText += text;
  arithMatickey = true;
  // // console.log(2);
}

// all clear and clear  ----------------------
const allClear = document.getElementById("allClear");
const clear = document.getElementById("clear");
// all clear function
function allClearF() {
  outPut.innerText = "0.00";
  arithMatickey = false;
}
allClear.addEventListener("click", () => {
  allClearF();
});
clear.addEventListener("click", () => {
  allClearF();
});

// oparation Key ----------------------
const operationKey = document.getElementById("operationKey");
operationKey.addEventListener("click", () => {
  const text = outPut.innerText;
  const numConvert = eval(text);
  outPut.innerText = numConvert;
});
