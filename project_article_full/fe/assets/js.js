'use strict';
//#region vars
const myForm = document.getElementById('myForm')
//#endregion vars


myForm&&myForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const inputName = myForm.querySelector('input[name="name"]').value.trim();
	const inputEmail = myForm.querySelector('input[name="email"]').value.trim();

	const formData = {
		'name':inputName,
		'email': inputEmail
	}

	// console.log(formData)
	fetch('http://localhost:3000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
	  },
		body: JSON.stringify(formData)
	})
	.then(response => response.text())
	.then(data => {
		 console.log(data); 
	})
	.catch(error => {
		 console.error('Error:', error);
	});
});




