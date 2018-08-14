import {Component} from '../component';
import style from './field.scss';
import template from './field.pug';

export class Field extends Component {
    static get bemName() {
        return 'field';
    }

    get template() {
        return template;
    }
}