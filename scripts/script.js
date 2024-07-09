
function generate_password(symbols, limit = 8) {
	let password = '';

	for(let i = 0; i< limit; i++) {
		let index = Math.random() * String(symbols).length;
		password += symbols.charAt(index)
	}

	return password
}

let parameters = {
	'a_z': 'qwertyuiopasdfghjklzxcvbnm',
	'A_Z': 'QWERTYUIOPASDFGHJKLZXCVBNM',
	"ss": '%$_-//?.,\'\"',
	'0_9': "0123456789"
}

document.addEventListener('DOMContentLoaded', ()=> {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]')
	const length_controller = document.querySelector('input[type="range"]')
	const btn_generate = document.querySelector('.btn__generate')
	const length_indicator = document.querySelector('.length')
	const out_password = document.querySelector('.password')

	length_controller.addEventListener('input', ()=> {
		length_indicator.textContent = length_controller.value;
	})

	btn_generate.addEventListener('click', ()=> {
		let limit = length_controller.value;

		let settings = [];
		checkboxes.forEach(checkbox => {
			if(checkbox.checked) { settings.push(checkbox.name); }
		})

		let symbols = '';
		settings.forEach(parameter => {
			symbols += parameters[parameter];
		})

		let password = generate_password(symbols, limit);
		out_password.textContent = password;
	})
})