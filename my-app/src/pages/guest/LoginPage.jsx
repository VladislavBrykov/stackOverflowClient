// import { useState } from 'react';
// import axios from 'axios';
// import AppHeader from '../../components/app-header';
// import AppMenu from '../../components/menu';
// import { Link } from 'react-router-dom';
// import '../../components/guest/login/login.css';


// function LoginPage() {
//     const styles = {//Стили для страницы
//         position: 'absolute',
//         top: '70px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//     }


//     const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера



//     const loadData = async () => { //Функция с запросом на сервер
//         const body = { "login": "user1", "password": "qwe", "email": "user1@gmail.com"} // То что передаем на сервер
//         console.log(body);
//         axios.defaults.baseURL = 'http://localhost:3000/api';  

//         const res = await axios.post(
//             `/auth/login`, 
//             body
//         );
//         console.log(res.data.rp.role);

//         localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
//         localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
//         alert(localStorage.jwtToken);

//         setDataFromServer(res.data)
//         //window.location.reload(); 
//         if(res.data.jwtToken) 
//             return true
//         return false
//     }

//     let loginButton;
//     if(loadData)
//         loginButton = <button id="btn"><Link to="/">Login</Link></button>;
//     else 
//         loginButton = <button id="btn"><Link to="/error-login">Login</Link></button>;


//     return (
//         <div>
//         <AppHeader/>
//         <AppMenu/>
//         <div>
//             <div style={styles} class="form_auth_block">
//                 <div class="form_auth_block_content">
//                     <p class="form_auth_block_head_text">Авторизация</p>
//                     <form class="form_auth_style" action="#" method="post">
//                         <label>Введите Ваш логин</label>
//                         <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" required ></input>
//                         <label>Введите Ваш пароль</label>
//                         <input type="password" name="auth_pass" placeholder="Введите пароль" required ></input>
//                         <label>Введите Ваш имейл</label>
//                         <input type="email" name="auth_email" placeholder="Введите Ваш имейл" required ></input>

//                         <button onClick={() => loadData()} class="form_auth_button" type="submit" name="form_auth_submit">{loginButton}</button>

//                         <button class="form_auth_button" type="submit" ><Link to="/password-reset">Восстановление пароля</Link></button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
//}

// export default LoginPage;

/////////////////////////////////////////////////////////////////////////////////
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
        const body = { "login": "user1", "password": "qwe", "email": "user1@gmail.com" } // То что передаем на сервер
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';
        const res = await axios.post(
            `/auth/login`,
            body
        )
        let role = res.data.rp
        role = role.role;
        console.log(role)

        if (role === "admin") {
            this.props.changeLoggedIn("admin")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
        else if (role === "user") {
            this.props.changeLoggedIn("user")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
        //.then(() =>  this.setState({loggedIn: "onn"})  )
        //localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
        // localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
        //alert(localStorage.jwtToken);
        // setDataFromServer(res.data)
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
                                <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" required ></input>
                                <label>Введите Ваш пароль</label>
                                <input type="password" name="auth_pass" placeholder="Введите пароль" required ></input>
                                <label>Введите Ваш имейл</label>
                                <input type="email" name="auth_email" placeholder="Введите Ваш имейл" required ></input>

                                <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => this.loadData()}>Login</button>

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