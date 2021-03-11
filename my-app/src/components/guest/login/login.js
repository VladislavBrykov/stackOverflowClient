import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';


const Login = () => {
//     myfunction() {
//         console.log("CLICKED");
//   }
    return (
<div class="form_auth_block">
    <div class="form_auth_block_content">
        <p class="form_auth_block_head_text">Авторизация</p>
        <form class="form_auth_style" action="#" method="post">
            <label>Введите Ваш логин</label>
            <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" required ></input>
            <label>Введите Ваш пароль</label>
            <input type="password" name="auth_pass" placeholder="Введите пароль" required ></input>
            <label>Введите Ваш имейл</label>
            <input type="email" name="auth_email" placeholder="Введите Ваш имейл" required ></input>
            <button class="form_auth_button" type="submit" name="form_auth_submit">Войти</button>
        </form>
    </div>
</div>
)
}

export default Login;