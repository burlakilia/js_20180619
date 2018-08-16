import {Component} from '../component';
import style from './messages.scss';
import template from './message.pug';

export class Messages extends Component {
      static get bemName() {
          return 'messages'
    }
   
    addMessage(message) {
        this.data.messages.push(message);
        this.render();
    }

}
