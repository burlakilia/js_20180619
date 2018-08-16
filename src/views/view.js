import {wrap} from "../components";

export class View {

    constructor(node) {
        this.node = node;
        this.isRendered = false;
    }

    /**
     * @override
     */
    onRenderComplete() {}

    toggle(state) {
        this.node.hidden = !state;
    }

    render(){
        this.node.innerHTML = this.template();
        wrap(this.node);
        this.onRenderComplete();
        this.isRendered = true;
    }

}