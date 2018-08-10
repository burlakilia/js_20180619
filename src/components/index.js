import {Button} from './button/button';
import {Messages} from './messages/messages';

let components = {
  [Button.bemName]: Button,
  [Messages.bemName]: Messages
};

let cache = new Map();

export const wrap = function (node) {
  let els = node.querySelectorAll('[data-component]');

  for (let el of els) {
    let name = el.dataset.component;
    let Constructor = components[name];
    let options = JSON.parse(el.dataset.options);

    if (!Constructor) {
      continue;
    }

    let component = new Constructor({ node: el, data: options});
    let fragment = component.render();

    el.replaceWith(fragment);

    cache.set(el, component);
  }

};
