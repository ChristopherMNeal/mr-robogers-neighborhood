function makeNumberArray(input) {
  let numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function mrRobogerTranslator(number) {
  let n = number.toString();
  const triggerArray = ["3", "2", "1"];
  const triggerTranslation = ["Won't you be my neighbor?", "Boop!", "Beep!"];
  let output = ""
  for (let i = 0; i < triggerArray.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (triggerArray[i] === n[j]) {
        output = triggerTranslation[i];
        console.log(output);
        break;
      }
    }
  }
  if (!output) {
    output = number;
  }
  return output;
}

// function mrRobogerTranslator(input) {
//   const triggerArray = ["3", "2", "1"];
//   const triggerTranslation = ["Won't you be my neighbor?", "Boop!", "Beep!"];
//   let output = "";
//   for (let i = 0; i < triggerArray.length; i++) {
//     for (let j = 0; j < input.length; j++) {
//       if (triggerArray[i] === input[j]) {
//         output = triggerTranslation[i];
//         break;
//       }
//     }
//   }
//   if (!output) {
//     output = input;
//   }
//   return output;
// }