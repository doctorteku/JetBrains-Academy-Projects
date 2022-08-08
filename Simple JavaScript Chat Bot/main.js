const input = require('sync-input');

// Greet User With Bot Name And Year Of Creation
function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

// Ask User To Input Their Name
function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

// Ask User For Remainers That Result From Dividing Their Age By 3, 5, and 7, Then Calculate Using The Remainders And Print The Result 
function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

// Ask User For A Number And Count Up To That Number Using A While Loop
function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

// Ask The User A Multiple Choice Question And Request An Answer Until They Provide The One
function test() {
	console.log("Let's test your programming knowledge.");
	// write your code here
	console.log("Why do we use methods?");
	console.log("1. To repeat a statement multiple times.");
	console.log("2. To decompose a program into several small subroutines.");
	console.log("3. To determine the execution time of a program.");
	console.log("4. To interrupt the execution of a program.");
	let isCorrect;

	do {
		let userAnswer = Number(input());

		if (userAnswer === 0){
			console.log("Congratulations, have a nice day!");
			let isCorrect = true;
		} else {
			console.log("Please, try again.");
			let isCorrect = false;
		}
	} while(isCorrect === true);
}


// Call The Functions Here
greet('Aid', '2022')
remind_name();
guess_age();
count();
test();

