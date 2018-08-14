export class Component {
    constructor({data, node}) {
        this.data = data;
        this.node = node;
    }

    render (template) {
        let parent = document.createElement('div');
        parent.innerHTML = template(this.data);

        let el = parent.firstElementChild;
        this.node.replaceWith(el);
        this.node = el;
    }
}
