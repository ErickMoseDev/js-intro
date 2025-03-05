const fullName = 'Masela Ogendo';
const hobby = 'cooking';
const age = 14;

if (age > 16) {
	console.log('is allowed to cook using Cooking Gas');
} else {
	console.log('too young to cook using Cooking Gas');
}

console.log(age);
console.log(hobby);
console.log(fullName);

//  sending a kid to pick something from the fridge
//  Yogo Yogo, Water, Energy drink

// nested if else statements
const drink = 'Soya';

if (drink === 'Water') {
	console.log(`Bring me the ${drink}`);
} else if (drink === 'Yogo Yogo') {
	console.log(`Bring me the ${drink}`);
} else if (drink === 'Energy drink') {
	console.log(`Bring me the ${drink}`);
} else {
	console.log(`The fridge has no ${drink} `);
}

// create a program that outputs the day of the week when given a number between 1 and 7
// use the nested if else statement
// day 1 = Sunday
// day 2 = Monday
// day 3 = Tuesday
// day 4 = Wednesday
// day 5 = Thursday
// day 6 = Friday
// day 7 = Saturday

// if the number is not between 1 and 7, output a message that says Out of bounds exception(1-7)

// takeaway -> convert from nested if else statements and use a switch case
// takeaway 2 -> use the tenary operator to achieve the same output
