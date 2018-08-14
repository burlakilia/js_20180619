import template from "./app.pug";
import {wrap, getByElement} from './components'


window.addEventListener('DOMContentLoaded', function () {
	document.body.innerHTML = template();
	wrap(document.body);

	console.log(document.body.querySelector('.messages'));

	let messages = getByElement(document.body.querySelector('.messages'));

	messages.addMessage({
	author: 'some',
	text: 'aaaaaaa'
	});

});

import {Field} from ".components/field/field";

window.addEventListener('DOMContentLoaded', function () {
	let field = new Field({
		data: {
			text: 'Имя'
		},
		node: document.querySelector('.field')
	});

	field.render();
})