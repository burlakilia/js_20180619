export class Router {

    constructor() {
        this.cache = {};
    }

    /**
     * Зарегестрировать новый маршрут
     * @param {string} path - путь
     * @param {Function} callback - коллбек, который будет взыван при переходе на маршрут
     */
    register(path, callback) {
        this.cache[path] = callback;
        return this;
    }

    onRoute(route) {
        let fn = this.cache[route];

        if (!fn) {
            console.error('Не известный маршрут', route);
            return;
        }

        fn();
    }

    start() {
        window.addEventListener('hashchange', () => {
            let route = location.hash.replace('#', '');
            this.onRoute(route);
        });
    }


}