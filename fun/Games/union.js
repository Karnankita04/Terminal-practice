let usedString = "";
function findIndex(character, string) {
  for (let index = 0; index <= string.length; index++) {
    if (character === string[index]) {
      return true;
    }
  } return false;
}

function union(set1, set2) {
  for (let index = 0; index < set2.length; index++) {
    if (!findIndex(set2[index], set1)) {
      set1 += set2[index];
    }
  }
  return set1;
}

function isSubset(set, subset) {
  for (let indexOfSubset = 0; indexOfSubset < subset.length; indexOfSubset++) {
    let isCharPresent = false;
    for (let indexOfSet = 0; indexOfSet < set.length; indexOfSet++) {
      if (subset[indexOfSubset] === set[indexOfSet]) {
        isCharPresent = true;
      }
    }

    if (!isCharPresent) {
      return false;
    }
  }
  return true;
}

function isSubstring(string, substring) {
  for (let index = 0; index < string.length; index++) {
    if (substring === string[index]) {
      return true;
    }
  }
  return false;
}

function isValid(input) {
  if ((input < 1 || input > 9) || isSubstring(usedString, input + "")) {
    return false;
  }

  usedString = usedString + input;
  return true;
}

console.log(isValid(3));
console.log(usedString);  
console.log(isValid(2));
console.log(usedString);
console.log(isValid(1));
console.log(usedString);
console.log(isValid(3));
console.log(usedString);  