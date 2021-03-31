// import AppHeader from '../components/app-header';
// import AppMenu from '../components/menu'
// import MainPage from '../components/main-page'
// import Login from '../components/login';

// function LoginPage() {

//   return (
//     <div>
//     <AppHeader/>
//       <AppMenu/>
//         <MainPage/>
//         <div><Login/></div>
//       </div>
//   );
// }

// export default LoginPage;


import { useState } from 'react';
import axios from 'axios';
import Registration from '../../components/guest/regisrtation';
import { Link } from 'react-router-dom';
import '../../components/guest/login/login.css';


function RegistrationPage() {
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

    const loadData = async () => { //Функция с запросом на сервер
        const body = { "login": "user11", "password": "qwe", "email": "user1@gmail.com" } // То что передаем на сервер
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';

        const res = await axios.post(
            `/auth/login`,
            body
        );
        console.log(res.data);
        // let data = Array.from(res.data.rp);

        setDataFromServer(res.data)
    }

    return (
        <div>
            <div>
                <div style={styles} class="form_auth_block">
                    <div class="form_auth_block_content">
                        <p class="form_auth_block_head_text">Регистрация</p>
                        <form class="form_auth_style" action="#" method="post">
                            <label>Введите Ваш логин</label>
                            <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" required ></input>
                            <label>Введите Ваш пароль</label>
                            <input type="password" name="auth_pass" placeholder="Введите пароль" required ></input>
                            <label>Подтвердите пароль</label>
                            <input type="password" name="auth_pass" placeholder="Подтвердите пароль" required ></input>
                            <label>Введите Ваш имейл</label>
                            <input type="email" name="auth_email" placeholder="Введите Ваш имейл" required ></input>
                            {
                                dataFromServer
                                    // И тут выходит мы српвшиваем, если у нас есть что-то в стейте, тогда выводим этот стейт, а если нет, то тогда показываем лоадер !
                                    // как то так )
                                    ? dataFromServer.map((item, index) => <h3 class="flex" key={index}>{item.rp}</h3>)
                                    : <button onClick={() => loadData()} class="form_auth_button" type="submit" name="form_auth_submit">Зарегистрироваться</button>
                            }
                            {/* <button class="form_auth_button" type="submit" name="form_auth_submit">Войти</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;


