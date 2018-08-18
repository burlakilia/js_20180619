import {View} from '../view';
import template from './signup.pug';
import {getByElement} from '../../components/index';
import {User} from '../../models/user';

export class SignupView extends View {
    get template() {
        return template;
    }

    onSignup() {
        User.signup(
            this.login.value,
            this.password.value,
            this.repeatPassword.value
        ).then(user => {
            return user.getAllUsers();
        }).then(users => {
            console.log(users);
        });

    }

    onRenderComplete() {
        this.repeatPassword = getByElement(this.node.querySelector('[name="password_repeat"]'));
        this.password = getByElement(this.node.querySelector('[name="password"]'));
        this.login = getByElement(this.node.querySelector('[name="login"]'));


        this.node.addEventListener('submit', event => {
            event.preventDefault();
            this.onSignup();
        })
    }

}