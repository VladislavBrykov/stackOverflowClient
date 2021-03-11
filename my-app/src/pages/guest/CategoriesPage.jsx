
import { useState } from 'react';
import axios from 'axios';
import AppHeader from '../../components/app-header';
import AppMenu from '../../components/menu'
import { Link } from 'react-router-dom';
import './UsersPaje.css';
// import newPost from '../components/new_post';


function CategoriesPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер

      axios.defaults.baseURL = 'http://localhost:3000/api';  


      const res = await axios.get("http://localhost:3000/api/categories") 

      setDataFromServer(res.data.rp)

    
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
            ? dataFromServer.map((item, index) => <h3 class="flex" key={index}>{item.category}</h3>)
            : <button onClick={() => loadData()} class="button">categories</button>
        }
      <script>
</script>
    </div>
    </div>
  );
}

export default CategoriesPage;

