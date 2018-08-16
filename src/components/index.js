
import {Button} from "./button/button";
import {Messages} from "./messages/messages";
import {Field} from "./field/field";
import {Users} from "./users/users";

let components = {
    [Button.bemName]: Button,
    [Messages.bemName]: Messages,
    [Field.bemName]: Field,
    [Users.bemName]: Users
};

let cache = new Map();

export function wrap(root) {

    let els = root.querySelectorAll('[data-component]');

    for (let el of els) {
        let name = el.dataset.component;
        let options = el.dataset.options;

        let Constructor = components[name];

        if (!Constructor) continue;

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