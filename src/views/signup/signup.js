import {View} from '../view';
import template from './signup.pug';
import {getByElement} from '../../components/index';

export class SignupView extends View {
    get template() {
        return template;
    }

    onSignup() {
        console.log( this.password.value , this.login.value);
    }

    onRenderComplete() {
        this.password = getByElement(this.node.querySelector('[name="password"]'));
        this.login = getByElement(this.node.querySelector('[name="login"]'));

        this.node.addEventListener('submit', event => {
            this.onLogin();
            event.preventDefault();
        })
    }

}