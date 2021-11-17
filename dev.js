const generateArray = function (amount) {
  let returnArray = [];
  amount = parseInt(amount);

  if (!Number.isNaN(amount)) {
    for (let i = 1; i <= amount; i++) {
      const newI = i.toString();
      if (newI.length === 1) {
        returnArray.push(`0000${newI}`); // szovegge alakitok egy szamot
      } else if (newI.length === 2) {
        returnArray.push(`000${newI}`);
      } else if (newI.length === 3) {
        returnArray.push(`00${newI}`);
      } else if (newI.length === 4) {
        returnArray.push(`0${newI}`);
      } else if (newI.length === 5) {
        returnArray.push(`${newI}`);
      }
    }
  } else {
    returnArray.push("error");
    console.error("You gave me NaN!");
  }
  return returnArray;
};

const generateArray = function (amount) {
  let returnArray = [];
  amount = parseInt(amount);

  if (!Number.isNaN(amount)) {
    for (let i = 1; i <= amount; i++) {
      const newI = i.toString();
      const newA = amount.toString();
      if (newI.length === 1 && newA.length === 3) {
        returnArray.push(`00${newI}`);
      } else if (newI.length === 2 && newA.length === 3) {
        returnArray.push(`0${newI}`);
      } else if (newI.length === 3 && newA.length === 3) {
        returnArray.push(`${newI}`);
      } else if (newI.length === 1 && newA.length === 4) {
        returnArray.push(`000${newI}`);
      } else if (newI.length === 2 && newA.length === 4) {
        returnArray.push(`00${newI}`);
      } else if (newI.length === 3 && newA.length === 4) {
        returnArray.push(`0${newI}`);
      } else if (newI.length === 4 && newA.length === 4) {
        returnArray.push(`${newI}`);
      } else if (newI.length === 1 && newA.length === 5) {
        returnArray.push(`0000${newI}`);
      } else if (newI.length === 2 && newA.length === 5) {
        returnArray.push(`000${newI}`);
      } else if (newI.length === 3 && newA.length === 5) {
        returnArray.push(`00${newI}`);
      } else if (newI.length === 4 && newA.length === 5) {
        returnArray.push(`0${newI}`);
      } else if (newI.length === 5 && newA.length === 5) {
        returnArray.push(`${newI}`);
      } else {
        returnArray.push("error");
        console.error("You gave me NaN!");
      }
    }
    return returnArray;
  }
};
