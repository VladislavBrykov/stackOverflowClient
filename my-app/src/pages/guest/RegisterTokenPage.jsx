import axios from 'axios';
import './UsersPaje.css';

function RegisterTokenPage(params) {
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    params = window.location.href; //получаем полную ссылку страницы
    params = params.match(/register\/([^ ]*)/)[1];   //получаем все что идет после /post-id
    
    const loadData = async () => { //Функция с запросом на сервер
        axios.defaults.baseURL = 'http://localhost:3000/api';
        const res = await axios.get("http://localhost:3000/api/auth/register/" + params)
        console.log(res);
    }

    return (
    <div>
        <div style={styles}>
            {
                document.addEventListener('DOMContentLoaded', loadData()) //показать всех пользователей запуск функции при загрузке страници
            }
            <h3 class="flex">Вы успешно зарегистированы. Можете залогиниться</h3>
        </div>
    </div>
  );
}

export default RegisterTokenPage;
