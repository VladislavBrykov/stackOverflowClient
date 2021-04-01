import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../components/guest/login/login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    async loadData() { //Функция с запросом на сервер

        let login = document.getElementById('login').value;
        let password = document.getElementById('pass').value;
        let email = document.getElementById('email').value;
        
        const body = { "login": "user1", "password": "qwe", "email": "user1@gmail.com" } 
       // const body = { "login": login, "password": password, "email": email } 

       
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';
        const res = await axios.post(
            `/auth/login`,
            body
        )
        let role = res.data.rp
        role = role.role;
        console.log(res.data.rp)

        if (role === "admin") {
            this.props.changeLoggedIn("admin")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            localStorage.id = res.data.rp.id
            alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
        else if (role === "user") {
            this.props.changeLoggedIn("user")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            localStorage.id = res.data.rp.id
            alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
    }

    render() {
        const styles = {//Стили для страницы
            position: 'absolute',
            top: '70px',
            left: '50%',
            transform: 'translateX(-50%)',
        }

        return (
            <div>
                <div>
                    <div style={styles} class="form_auth_block">
                        <div class="form_auth_block_content">
                            <p class="form_auth_block_head_text">Авторизация</p>
                            <form class="form_auth_style" action="#" method="post">
                                <label>Введите Ваш логин</label>
                                <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" id="login" required ></input>
                                <label>Введите Ваш пароль</label>
                                <input type="password" name="auth_pass" placeholder="Введите пароль" id="pass" required ></input>
                                <label>Введите Ваш имейл</label>
                                <input type="email" name="auth_email" placeholder="Введите Ваш имейл" id="email" required ></input>

                                <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => this.loadData()}><Link to="/">Login</Link></button>

                                <button class="form_auth_button" type="submit" ><Link to="/password-reset">Восстановление пароля</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;