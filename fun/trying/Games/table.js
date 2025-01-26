function repeat(length) {
  let finalString = "";

  for (let times = 1; times <= length; times++) {
    finalString += "━";
  }
  return finalString;
}

function isEnd(number) {
  return number % 3 === 0;
}

function getmiddle() {
  let row = "";

  for (let number = 1; number <= 9; number++) {
    row += "┃   " + number + "    ";

    if (isEnd(number)) {
      row += "┃";
      row += "\n";
      row += getFooter();
      row += "\n";
    }
  }

  return row;
}

function getheader() {
  return "┏" + repeat(26) + "┓";
}

function getFooter() {
  return "┗" + repeat(26) + "┛";
}

const box = getheader() + "\n" + getmiddle();

// console.log(box)