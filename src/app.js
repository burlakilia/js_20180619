import template from './app.pug';
import {wrap, getByElement} from './components';
import data from './data/data';
import styles from './static/styles/styles.scss'

window.addEventListener('DOMContentLoaded', function () {

    document.body.innerHTML = template(data);
    wrap(document.body);

    // let button = getByElement(document.querySelector('.button'));
    //
    // console.log(button);

});