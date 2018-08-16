import {Button} from './button/button';
import {Field} from './field/field';
import {Users} from './users/users';
import {Messages} from "./messages/messages";

let components = {
  [Button.bemName]: Button,
  [Field.bemName]: Field,
  [Users.bemName]: Users,
  [Messages.bemName]: Messages
};

let cache = new Map();

export function wrap(root) {
  let els = root.querySelectorAll('[data-component]');

  for (let el of els) {
    let name = el.dataset.component;
    let options = el.dataset.options;

    let Constructor = components[name];

    if (!Constructor) {
      continue;
    }

    let component = new Constructor({
      node: el,
      data: JSON.parse(options)
    });

    component.render();
    cache.set(component.node, component);
  }
}

export function getByElement(el) {
  return cache.get(el);
}