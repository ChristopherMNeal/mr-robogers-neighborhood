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
  } else if (number === 3) {
    return "Won't you be my neighbor?";
  } else {
    return number;
  }
}