import template from './app.pug';
import data from './data/data';
import {Router} from './modules/router';

import {LoginView} from './views/login/login';
import {SignupView} from './views/signup/signup';

window.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = template(data);

    let router = new Router();

    let loginView = new LoginView(document.querySelector('.js-login_view'));
    let signupView = new SignupView(document.querySelector('.js-signup_view'));

    router
        .register('login', loginView)
        .register('signup', signupView);

    router.start();
});