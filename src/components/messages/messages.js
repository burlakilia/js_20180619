import {Component} from '../component';
import style from './messages.scss';
import template from './messages.pug';

export class Messages extends Component {
   
    static get bemName() {
        return 'messages';
    }

    get template() {
        return template;
    }
        addMessage(message) {
        this.data.messages.push(message);
        this.render();
    }

    // TODO добавить метод addMessage - который добавить новое сообщение в список

}
