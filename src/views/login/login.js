import {View} from '../view';
import template from './login.pug';
import {getByElement} from '../../components/index';

export class LoginView extends View {
    get template() {
        return template;
    }

    onLogin() {
        // TODO добавить view chat - и после успешного перехода перебрасывать
        // пользователя на chat (location.hash = "#chat")
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