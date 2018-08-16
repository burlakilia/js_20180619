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

    get value() {
        return this.node.value;
    }
    // TODO добавить метод показа ошибок (showError) и сделать верстку ошибок
    // TODO при любом вводе в поле, ошибка должна скрываться

}