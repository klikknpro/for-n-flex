const generateArray = function (amount) {
  let returnArray = [];
  amount = parseInt(amount);

  if (!Number.isNaN(amount)) {
    for (let i = 1; i <= amount; i++) {
      const newI = i.toString();
      const newA = amount.toString();
      const zero = "0";
      const numOfZero = newA.length - newI.length;
      returnArray.push(`${zero.repeat(numOfZero)}${newI}`);
    }
  } else {
    returnArray.push("error");
    console.error("You gave me NaN!");
  }
  return returnArray;
};

const loadEvent = function () {
  console.log("The site is ready.");

  const root = document.getElementById("root");
  const list = generateArray(200);
  if (list[0] !== "error") {
    for (const item of list) {
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  } else {
    console.error("You gave me NaN!");
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
