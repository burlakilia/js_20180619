const DOMAIN = 'https://murmuring-cove-73426.herokuapp.com';

export class Model {

    static request(method, url, data, options = {}) {
        let xhr = new XMLHttpRequest();

        return new Promise((resolve, reject) => {

            xhr.addEventListener('readystatechange',
                event => {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                });

            xhr.open(method, `${DOMAIN}${url}`);

            if (options.token) {
                xhr.setRequestHeader('Authorization', options.token);
            }

            xhr.send(JSON.stringify(data));
        });
    }

}