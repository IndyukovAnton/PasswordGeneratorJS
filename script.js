const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const lenght_contoller = document.querySelector('input[type="range"]')
const btn_generate = document.querySelector('.generate')
const lenght_indicator = document.querySelector('.lenght')
const out_password = document.querySelector('.password')

let parameters = {
	'a_z': 'qwertyuiopasdfghjklzxcvbnm',
	'A_Z': 'QWERTYUIOPASDFGHJKLZXCVBNM',
	"ss": '%$_-//?.,\'\"',
	'0_9': "0123456789"
}

lenght_contoller.addEventListener('input', ()=> {
	lenght_indicator.textContent = lenght_contoller.value;
})

btn_generate.addEventListener('click', ()=> {
	let limit = lenght_contoller.value;

	let settings = [];
	checkboxes.forEach(checkbox => {
		if(checkbox.checked) { settings.push(checkbox.name); }
	})

	let symbols = '';
	settings.forEach(parameter => {
		symbols += parameters[parameter];
	})

	let password = '';
	for(let i = 0; i< limit; i++) {
		let index = Math.random() * String(symbols).length;
		password += symbols.charAt(index)
	}

	out_password.textContent = password;
})
