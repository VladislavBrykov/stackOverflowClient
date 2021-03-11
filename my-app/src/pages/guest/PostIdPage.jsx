
import { useState } from 'react';
import axios from 'axios';
import AppHeader from '../../components/app-header';
import AppMenu from '../../components/menu'
import { Link } from 'react-router-dom';
import './UsersPaje.css';
import '../../components/posts/posts.css'
// import newPost from '../components/new_post';


function PostIdPage(params) {// Страница постов
  

      const styles = {//Стили для страницы
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
      }

      let result;
      let category;
      let username;
    
      const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера
    
      const loadData = async () => { //Функция с запросом на сервер
        params = window.location.href; //получаем полную ссылку страницы
        params = params.match(/post-id([^ ]*)/)[1];   //получаем все что идет после /post-id
        params = parseInt(params.replace(/\D+/g,""));  //получаем айди поста со ссылки

        axios.defaults.baseURL = 'http://localhost:3000/api';  
        const res = await axios.get("http://localhost:3000/api/posts/" + params) 
        //console.log(res.data.rp[0].title);
        result = res.data.rp;

        axios.defaults.baseURL = 'http://localhost:3000/api';
        category = await axios.get("http://localhost:3000/api/categories/" + result[0].id_categiries) 
        result[0].category = category.data.rp[0].category;
       // category ="java";


       axios.defaults.baseURL = 'http://localhost:3000/api';
        username = await axios.get("http://localhost:3000/api/users/" + result[0].id_user) 
        console.log(username);

        result[0].username = username.data.rp.login;
        console.log(result);
        //  result = {
        //     "id": res.data.rp.id,
        //     "content": res.data.rp.content,
        //     "title": res.data.rp.title
        //  }
        setDataFromServer(result)
      }

      return (
        <div>
          <AppHeader/>
          <AppMenu/>
          
        <div style={styles}>
          {/* Метод для вывода данных из массива */}
          {/* Ошибка была из-за того что запрос асинхронный, а мы пытали сразу выводить. А изначально стейут у нас null */}
            {
              dataFromServer
              // И тут выходит мы српвшиваем, если у нас есть что-то в стейте, тогда выводим этот стейт, а если нет, то тогда показываем лоадер !
              // как то так )
                ? dataFromServer.map((item, index) => <h3 class="flex" key={index}>{item.login}</h3>)
                : <button class="form_auth_button" type="submit" onClick={() => loadData()} >Показать всех пользователей</button>
            }
          <script>
    </script>
        </div>
        </div>
      );





}
export default PostIdPage;