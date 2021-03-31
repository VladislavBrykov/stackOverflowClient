
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersPaje.css';
import '../../components/posts/posts.css'
// import newPost from '../components/new_post';


function PostsPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер
    axios.defaults.baseURL = 'http://localhost:3000/api';
    const res = await axios.get("http://localhost:3000/api/posts")
    console.log(res.data.rp);
    setDataFromServer(res.data.rp.reverse())
  }
  
  return (
    <div>

      <div style={styles}>
        {
          dataFromServer
            // И тут выходит мы српвшиваем, если у нас есть что-то в стейте, тогда выводим этот стейт, а если нет, то тогда показываем лоадер !
            // как то так )
            ? dataFromServer.map((item, index) =>
              <div id="pressed">
                <h2 id="h2" key={index}>{item.title}</h2>
                <h3 id="h4" key={index}>{item.content}</h3>
                <button class="button"><Link to={'/post-id' + '/' + item.id}>Посмотреть</Link></button>
              </div>)
            : document.addEventListener('DOMContentLoaded', loadData()) //показать всех пользователей запуск функции при загрузке страници
        }
        <script>
        </script>
      </div>
    </div>
  );
}

export default PostsPage;

