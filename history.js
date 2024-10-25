const history = document.getElementById("history");
// console.log(history);
const arr = [];
export function text(cal, ans) {
  console.log(cal, ans);
  //   console.log('text')
  // console.log([cal,ans])
  const item = { cal, ans };
  // arr.push(item);
  localStorageItemSet(item);
}

function localStorageItemSet(text) {
  const oldItem = localStorageGetItem();
  const result = [...oldItem, text];
  console.log(result);
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

// console.log(arr);

// text(10, 20);
// window.text = text;
