export class Component {

  	constructor({ data, node }) {
    	this.data = data;
    	this.node = node;
 	}

	render() {
		// Создаем родительский элемент, который нужен только
		// для преобразование строки в Element
		let parent = document.createElement('div');

		// преобразуем
		parent.innerHTML = template(this.data);

		// получаем наш элемент из parent
		let el = parent.firstElementChild;

		// заменяем корневой узел, но только что отрендереный
		this.node.replaceWith(el);

		// меняем ссылку, так чтобы находить в Map
		this.node = el;

	}

}
