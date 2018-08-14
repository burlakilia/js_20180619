export class Component {
    constructor({data, node}) {
        this.data = data;
        this.node = node;
    }

    render () {
        let parent = document.createElement('div');
        parent.innerHTML = this.template(this.data);

        let el = parent.firstElementChild;
        this.node.replaceWith(el);
        this.node = el;
    }
}
