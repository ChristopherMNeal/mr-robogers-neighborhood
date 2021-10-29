# _Mr. Roboger's Neighborhodd_

#### By _**Christopher Neal**_

#### _Mr. Roboger's Neighborhood, Your Friendly AI Television Host_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

## Description

_Mr. Roboger is a friendly AI television host. Enter a number and he will speak to you._

## Setup/Installation Requirements

* _Clone the repository from GitHub_
* _Open the webpage in your preferred browser_
* _The page is also available on my gh-pages [here](https://christophermneal.github.io/mr-robogers-neighborhood/)!_

## Known Bugs

_None_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _29 October 2021_ _Christopher Neal_

## Tests

Describe: makeNumberArray()

Test: "It should return an array with a 0 if the number 0 is inputted."
Code: makeNumberString(0);
Expected Output: [0]

Test: "It should return an array with numbers counting up from 0 to the number that is inputted."
Code: makeNumberString(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: mrRobogerTranslator()

Test: "It should return 0 if the number 0 is inputted."
Code: mrRobogerTranslator(0);
Expected Output: "0"

Test: "It should return 'Beep!' if the number 1 is inputted."
Code: mrRobogerTranslator(1); 
Expected Output: "Beep!"

Test: "It should return 'Boop!' if the number 2 is inputted."
Code: mrRobogerTranslator(2); 
Expected Output: "Boop!"

Test: "It should return 'Won't you be my neighbor?' if the number 3 is inputted."
Code: mrRobogerTranslator(3); 
Expected Output: "Won't you be my neighbor?"

Test: "It should return 'Beep!' if the number 11 is inputted."
Code: mrRobogerTranslator(11); 
Expected Output: "Beep!"

Test: "It should return the inputted number unless it is an exception; the importance of the exceptions should go from 3 (most important), 2, 1(least important)."
Code: mrRobogerTranslator(3210);
"Won't you be my neighbor?"
Code: mrRobogerTranslator(210);
Expected Output: "Boop!"
Code: mrRobogerTranslator(10);
Expected Output: "Beep!"
Code: mrRobogerTranslator(0);
Expected Output: "0"

Test: "It should return "" if no number is inputted."
Code: mrRobogerTranslator(); 
Expected Output: ""