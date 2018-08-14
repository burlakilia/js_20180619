import {Component} from '../component';
import style from './field.scss';

export class Field extends Component {
	render() {
		this.node.innerHTML = '<input class='field'>'
		;
		document.querySelector('input').placeholder = ${this.data.text};
	}
}