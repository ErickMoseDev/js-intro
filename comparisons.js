// we are going to create a password checker

// database -> a place to store user data
// form on the client side to login
// you ask the user to input their email and password.
// you collect the values and send them back to the server

const userEmail = 'eric.mongare@moringaschool.com';
const userPassword = '12345678';

//  a simple function to check if the details are correct

function validateData(email, password) {
	if (email === userEmail && password === userPassword) {
		console.log('Login successful');
	} else {
		console.log('Invalid email or password');
	}
}

function validateFields(email, password) {
	if (email === userEmail) {
		console.log('Correct Email');
	} else {
		console.log('Incorrect Email');
	}

	if (password === userPassword) {
		console.log('Correct password');
	} else {
		console.log('Incorrect Password');
	}
}

function oppositeValidateFields(email, password) {
	if (email !== userEmail) {
		console.log('Incorrect Email');
	} else {
		console.log('Correct Email');
	}

	if (password !== userPassword) {
		console.log('Incorrect Password');
	} else {
		console.log('Correct password');
	}
}

// calling the function

// validateData('eric.mongare@moringaschool.com', '12345678');
// validateData('eric.monre@moringaschool.com', '123478');
// validateData('eric.mongare@morinchool.com', '123458');

// validate individual fields

// validateFields('eric.mongare@moringaschool.com', '123');
// oppositeValidateFields('eric.mongare@moringaschool.com', '123');

// simple comparisons
const eugeneLaptop = 'Lenovo Ideapad slim 3';
const erickLaptop = 'Lenovo Ideapad slim 3';
const juneyLaptop = 'Lenovo Thinkpad ';

// strict operator
// console.log(eugeneLaptop === erickLaptop);
// console.log(eugeneLaptop === juneyLaptop);

console.log(25 + 35 === 15 + 45);

// loose operator
