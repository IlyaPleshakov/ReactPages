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
            username: 'admin',
            password: 'admin'
        }
   
    }
    handleSubmit(event) {
        event.preventDefault()
        this.userLoginFetch(this.state)
    }

    async userLoginFetch() {
        let url = 'http://localhost:8080/login';
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'application':'x-www-form-urlencoded',
                'Access-Control-Origin': '*',
                'credentials': 'include'
              },
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
             })
        }).then((res) => {
            res.json()})
            .catch(err => {
                console.log(err);
            });
    }

    updateInputLogin(event) {
        this.setState({ username: event.target.value })
    }
    updateInputPassword(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div style={styleLogin}>
                <form onSubmit={this.handleSubmit}>
                    Введите логин {this.props.authenticate}
                    <input type="text" name="username" value={this.state.login} onChange={this.updateInputLogin} /><br />
                    Введите пароль
                    <input type="text" name="password" value={this.state.password} onChange={this.updateInputPassword} />
                    <MyButton name="Войти" onClick={this.props.userLoginFetch} type="submit" />

                </form>
                <MyButton name="Регистрация" />
            </div>
        );
    }

}