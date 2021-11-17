const generateArray = function (amount) {
  let returnArray = [];
  amount = parseInt(amount);

  if (!Number.isNaN(amount)) {
    for (let i = 0; i < amount; i++) {
      returnArray.push(`${i}`); // szovegge alakitok egy szamot
    }
  } else {
    returnArray.push("error");
  }
  return returnArray;
};

const loadEvent = function () {
  console.log("The site is ready.");
  /*
  console.log(generateArray(10));
  console.log(generateArray(20));
  console.log(generateArray("nemnem"));
  console.log(generateArray([5]));
  */
  const root = document.getElementById("root");
  const list = generateArray(4);
  if (list[0] !== "error") {
    for (const item of list) {
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  }
};

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
  full jo ez a verzio is;
})
window.addEventListener("load", () => {
  meg ez is f@sza;
})
*/
