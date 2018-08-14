export class Router {

    constructor() {
        this.cache = {};
    }

    /**
     * Зарегестрировать новый маршрут
     * @param {string} path - путь
     * @param {View} view - модуль view который должен быть показан
     */
    register(path, view) {
        this.cache[path] = view;
        return this;
    }

    onRoute(route) {
        let view = this.cache[route];

        if (!view) {
            console.error('Не известный маршрут', route);
            return;
        }

        if (this.current) {
            this.current.toggle(false);
        }

        if (!view.isRendered) {
            view.render();
        }

        view.toggle(true);
        this.current = view;
    }

    start() {

        function getRouteFromHash() {
            return location.hash.replace('#', '');
        }

        window.addEventListener('hashchange', () => {
            this.onRoute(getRouteFromHash());
        });

        this.onRoute(getRouteFromHash());
    }


}