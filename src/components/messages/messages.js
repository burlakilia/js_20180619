import {Component} from '../component';
import style from './messages.scss';
import template from './messages.pug';

export class Messages extends Component {
    static get bemName() {
        return 'messages';
    }

    render() {
        super.render(template);
    }
}
