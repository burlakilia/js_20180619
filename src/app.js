import template from "./app.pug";
import {wrap, getByElement} from './components'

window.addEventListener('DOMContentLoaded', function () {
	document.body.innerHTML = template();
	wrap(document.body);

	console.log(document.body.querySelector('.messages'));
	console.log(document.body.querySelector('.users'));
	console.log(document.body.querySelector('.field'));
	console.log(document.body.querySelector('.button'));

	let messages = getByElement(document.body.querySelector('.messages'));

	messages.addMessage({
		author: 'some',
		text: 'aaaaaaa'
	});
	
	let users = getByElement(document.body.querySelector('.users'));

	users.addUser({
		text: 'гость 1'
	});

	let button = getByElement(document.body.querySelector('.button'));

	button.addText({
		text: 'войти'
	});

});
