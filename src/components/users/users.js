import {Component} from '../component';
import style from './users.scss';

export class Users extends Component {
	render() {
		this.node.innerHTML = '\
			<ul class='users'>\
				<li class="user-item">${this.data.text}</li>\
				<li class="user-item">${this.data.text}</li>\
				<li class="user-item">${this.data.text}</li>\
				<li class="user-item">${this.data.text}</li>\
			</ul>'
		;
	}
}