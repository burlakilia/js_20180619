import {Model} from "./model";


const API_URL = '/users';

export class User extends Model {

    constructor(id, name, token) {
        super();

        this.id = id;
        this.name = name;
        this.token = token;
    }

    getAllUsers() {

        return Model.request('GET', `${API_URL}`, {},
            { token: this.token});

    }

    static signup(login, pwd, pwdRepeat) {

        return Model.request('POST', `${API_URL}/signup`, {
            login: login,
            password: pwd,
            passwordRepeat: pwdRepeat
        }).then(result => {
            return new User(result.userId, login, result.auth);
        });

    }

}