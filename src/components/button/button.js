import {Component} from '../component';
import style from './button.scss';
import template from './button.pug';

export class Button extends Component {
  	
  	static get bemName() {
    	return 'button'
  	}

  	 addButton(button) {
        this.data.button.push(button);
        this.render();
    
}
