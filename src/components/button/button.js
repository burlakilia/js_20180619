import {Component} from '../component';
import style from './button.scss';
import template from './button.pug';

export class Button extends Component {
    static get bemName() {
        return 'button';
    }

    render () {
        super.render(template);
    }
}
