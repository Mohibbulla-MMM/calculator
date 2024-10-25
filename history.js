const history = document.getElementById("history");
const historySideBar = document.getElementById("historySideBar");
// console.log(history);

export function text(cal, ans) {
  // console.log(cal, ans);
  //   console.log('text')
  // console.log([cal,ans])
  const item = { cal, ans };
  localStorageItemSet(item);
}

function localStorageItemSet(text) {
  const oldItem = localStorageGetItem();
  const result = [...oldItem, text];
  // console.log(result);
  localStorage.setItem("calm4", JSON.stringify(result));
}

function localStorageGetItem() {
  const result = localStorage.getItem("calm4");
  // console.log(result);
  const item = JSON.parse(result);
  if (item?.length > 0) return item;
  else {
    return [];
  }
}

history.addEventListener("click", () => {
  historySideBar.style.display = "block";
  historySideBar.innerHTML = `
  <div class="closedSideBar" id="closedSideBar" >×</div>
  `;

  const item = localStorageGetItem();
  // console.log(item);
  item.forEach((value, i) => {
    const section = document.createElement("section");
    const calP = document.createElement("p");
    const ansP = document.createElement("p");
    const p = document.createElement("p");
    calP.innerText = value.cal;
    calP.setAttribute("title", value.cal);
    ansP.innerText = " = " + value.ans;
    ansP.classList.add("historyNumber3");
    ansP.setAttribute("title", value.ans);

    p.innerText = i + 1;

    p.classList.add("historyNumber");
    section.appendChild(p);
    section.appendChild(calP);
    section.appendChild(ansP);
    historySideBar.appendChild(section);
  });


  // clear storage button added
  historySideBar.insertAdjacentHTML(
    "beforeend",
    `<button class="clearStorage" id="clearStorage">Clear History</button>`
  );

  // closed sidebar ----------------------
  const closedSideBar = document.querySelector(".closedSideBar");

  closedSideBar.addEventListener("click", () => {
    closedSideBarF();
  });
  // clear Storage ----------------------
  const clearStorage = document.querySelector(".clearStorage");

  clearStorage.addEventListener("click", () => {
    clearStorageF();
  });
});



// text(10, 20);
// window.text = text;

// sidebar closed -----------------
function closedSideBarF() {
  historySideBar.style.display = "none";
  // console.log(historySideBar);
}

// clearStorageF -----------------
function clearStorageF() {
  localStorage.removeItem('calm4')
  localStorageGetItem()  
  closedSideBarF()
}
