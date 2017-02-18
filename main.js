// The text input should accept only letters, no numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

// Variables

var testString = "";
var outputDivReversed = document.getElementById("outputDivReversed");
var outputDivAlpha = document.getElementById("outputDivAlpha");
var outputDivPalindrome = document.getElementById("outputDivPalindrome");
var button = document.getElementById("button");
var inputField = document.getElementById("inputField");

//Event Listeners

button.addEventListener("click", manipulate);

button.addEventListener("keypress", function(e){
	if (e.keyCode === 13) {
		manipulate();
	}
});

inputField.addEventListener("keypress", function(e){
	if (e.keyCode === 13) {
		manipulate();
	}
});

// Functions

function manipulate() {
	testString = inputField.value;
	validity = true;
	validate(testString);
	if (validity === true) {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}
};

function reversal(string) {
	var reversed = string.split("").reverse().join("");
	outputDivReversed.innerHTML = reversed;
};

function alphabits(string) {
	var alphabetical = string.split("").sort().join("");
		outputDivAlpha.innerHTML = alphabetical;
};

function palindrome(string) {
	var testPalin = string.split("").reverse().join("");
	if (testPalin === string) {
		outputDivPalindrome.innerHTML = "It's a palindrome!";
	} else {
		outputDivPalindrome.innerHTML = "It's not a palindrome...";
	}
};

function validate(string) {
	string.split("").forEach(function (char) {
		if (isNaN(char) === false) {
			alert("Please enter only alphabetical characters");
			validity = false;
		}
	});
}; 
