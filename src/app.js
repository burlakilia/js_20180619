import {wrap} from "./components";
import template from "./app.pug";

window.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = template();
  wrap(document.body);
});