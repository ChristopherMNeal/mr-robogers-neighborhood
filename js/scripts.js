function makeNumberArray(input) {
  let numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function mrRobogerTranslator(numberInput) {
  const input = numberInput.toString();
  const triggerArray = ["3", "2", "1"];
  const triggerTranslation = ["Won't you be my neighbor?", "Boop!", "Beep!"];
  let output = "";
  for (let i = 0; i < triggerArray.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (triggerArray[i] === input[j]) {
        output = triggerTranslation[i];
        break;
      }
    }
    if (output) {
      break;
    }
  }
  if (!output) {
    output = input;
  }
  return output;
}

function mrRoboger(input) {
  let resultsArray = [];
  const numberArray = makeNumberArray(input);
  for (let i = 0; i < numberArray.length; i++) {
    resultsArray.push(mrRobogerTranslator(numberArray[i]));
  }
  return resultsArray.join(" ");
}

