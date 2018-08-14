import template from './app.pug';
import {wrap, getByElement} from './components';
import data from './data/data';
import {Router} from './modules/router';


window.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = template(data);

    let router = new Router();

    router
        .register('login', () => { console.log('login') })
        .register('chat', () => { console.log('chat') })
        .register('users', () => { console.log('users') })
        .register('signup', () => { console.log('signup') });


    router.start(); 

    wrap(document.body);
});