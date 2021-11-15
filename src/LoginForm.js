import React from 'react';
import MyButton from './MyButton';

var styleLogin = {


    width: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '5% 0',
}

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInputLogin = this.updateInputLogin.bind(this);
        this.updateInputPassword = this.updateInputPassword.bind(this);
        this.state = {
            login: 'admin',
            password: 'admin'
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        this.userLoginFetch(this.state)
    }

    async userLoginFetch() {
        let url = 'https://jsonplaceholder.typicode.com/todos';
        return fetch(url).then((res) => {
            localStorage.setItem('id_token', res.token) // Store token 
        })
            .catch(err => {
                console.log(err);
            });
    }

    updateInputLogin(event) {
        this.setState({ login: event.target.value })
    }
    updateInputPassword(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div style={styleLogin}>
                <form onSubmit={this.handleSubmit}>
                    Введите логин {this.props.authenticate}
                    <input type="text" name="login" value={this.state.login} onChange={this.updateInputLogin} /><br />
                    Введите пароль
                    <input type="text" name="password" value={this.state.password} onChange={this.updateInputPassword} />
                    <MyButton name="Войти" onClick={this.props.onClick} type="submit" />

                </form>
                <MyButton name="Регистрация" />
            </div>
        );
    }

}