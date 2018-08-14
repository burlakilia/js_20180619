import template from './app.pug';
import {wrap, getByElement} from './components';
import data from './data/data';

window.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = template(data);
    wrap(document.body);
});