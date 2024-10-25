import { text } from "./history.js";
const outPut = document.querySelector("#outPut");
const numaricPad = document.querySelector("#numaricPad");
let arithMatickey = false;
// console.log(numaricPad);
// console.log(text);
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
  //   console.log(value);
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

// backSpace key -----------------------------
const backSpace = document.getElementById("backSpace");
backSpace.addEventListener("click", () => {
  const text = outPut.innerText;
  const result = text.slice(0, -1);
  console.log(result);
  if (result.length > 0) {
    outPut.innerText = result;
  } else {
    outPut.innerText = "0";
  }
});

// oparation Key ----------------------
const operationKey = document.getElementById("operationKey");
operationKey.addEventListener("click", () => {
  const txt = outPut.innerText;

  const check = txt.charAt(0) == "0";
  const plus = txt.slice(-1) == "+";
  const minus = txt.slice(-1) == "-";
  const division = txt.slice(-1) == "/";
  const multiply = txt.slice(-1) == "*";
  console.log(plus, minus, division, multiply);
  //   console.log(txt.slice(-1)); // Outputs: "!"

  if (check) {
    return;
  } else if (plus) {
    return;
  } else if (minus) {
    return;
  } else if (division) {
    return;
  } else if (multiply) {
    return;
  } else {
    const answar = eval(txt);
    outPut.innerText = answar;
    text(txt, answar);
  }
});
