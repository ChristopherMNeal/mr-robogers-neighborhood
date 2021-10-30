function makeNumberArray(input) {
  let numberArray = [];
  if (input === "" || input < 0) {
    numberArray = "-1";
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
  let division = 0;
  if (input > 3) {
    division = Math.floor(numberArray.length / 5);
    for (let i = 0; i < division; i++) {
      resultsArray.push("<span class='big'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
    for (let i = division; i < division*2; i++) {
      resultsArray.push("<span class='reg'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
    for (let i = division*2; i < division*3; i++) {
      resultsArray.push("<span class='small'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
    for (let i = division*3; i < division*4; i++) {
      resultsArray.push("<span class='smaller'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
    for (let i = division*4; i < numberArray.length; i++) {
      resultsArray.push("<span class='smallest'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
  } else {
    for (let i = 0; i < numberArray.length; i++) {
      resultsArray.push("<span class='big'>" + mrRobogerTranslator(numberArray[i]) + "</span>");
    }
  }
  return resultsArray.join(" ");
}

$(document).ready(function() {
  let name = "";
  $("#name-form").submit(function(event) {
    event.preventDefault();
    name = $("input#name").val();
    if (!name) {
      $("#no-name").slideDown();
    } else {
      $("#name-form").slideToggle();
      $("#number-form").delay(800).slideToggle();
    }
  });

  $("#number-form").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    if (number > 2000) {
      $("#too-big").slideDown();
      $("#positive-integer").hide();
    } else if (makeNumberArray(number) === "-1") {
      $("#positive-integer").slideDown();
      $("#too-big").hide();
    } else {
      $("#results-p").html(mrRoboger(number));
      $("#number-form").slideToggle();
      $("#results").delay(800).slideToggle();
    }
    $("#reset").click(function() {
      location.reload();
    });
  });
});
