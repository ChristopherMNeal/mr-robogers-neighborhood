function makeNumberArray(input) {
  let numberArray = [];
  if (input === "") {
    numberArray.push(-1);
  } else {
    for (let i = 0; i <= input; i++) {
      numberArray.push(i);
    }
  }
  return numberArray;
}

function mrRobogerTranslator(numberInput) {
  const name = $("input#name").val();
  const input = numberInput.toString();
  const triggerArray = ["3", "2", "1"];
  const triggerTranslation = ["Won't you be my neighbor, " + name + "?", "Boop!", "Beep!"];
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

$(document).ready(function() {
  let name = "";
  $("#name-form").submit(function(event) {
    event.preventDefault();
    name = $("input#name").val();
    if (!name) {
      $("#no-name").show();
    } else {
      $("#name-form").slideToggle();
      $("#number-form").delay(800).slideToggle();
    }
  });

  $("#number-form").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    $("#results-p").text(mrRoboger(number));
    $("#number-form").slideToggle();
    $("#results").delay(800).slideToggle();
    $("#reset").click(function() {
      location.reload();
    });
  });
});
