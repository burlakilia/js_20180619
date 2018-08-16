import {Component} from '../component';
import style from './field.scss';
import template from './field.pug';

export class Field extends Component {

	static get bemName() {
    	return 'field'
  	}

  	addField(field) {
  		document.querySelector('input').placeholder = '${this.data.text}';
        this.data.field.push(field);
        this.render();
    }
	
}