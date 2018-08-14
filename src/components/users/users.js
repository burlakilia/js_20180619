import {Component} from '../component';
import style from './users.scss';
import template from './users.pug';

export class Users extends Component {
    static get bemName() {
        return 'users';
    }

    render() {
        super.render(template);
    }
}