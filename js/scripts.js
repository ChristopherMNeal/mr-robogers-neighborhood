function makeNumberArray(input) {
  let numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function mrRobogerTranslator(number) {
  if (number === 1) {
    return "Beep!";
  } else if (number === 2) {
    return "Boop!";
  } else {
    return number;
  }
}