import {Component} from '../component';
import style from './button.scss';

export class Button extends Component {
  static get bemName() { return 'button' }

  render(data) {
    this.node.innerHTML = `
      <button class="button">${this.data.text}</button>
    `;
  }

}
