import { useState } from 'react';
import axios from 'axios';
import AppHeader from '../components/app-header';
import AppMenu from '../components/menu'
// import newPost from '../components/new_post'
import { Link } from 'react-router-dom';
// import newPost from '../components/new_post';


function PostsPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  const [dataFromServer, SetDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер
    const body = { "title": "post 16", "content": "какой-то контент post test 14", "categories": "название категории", "user": 21} // То что передаем на сервер
    console.log(body);
  // в axios первый агрумент url, воторой тело, третий объект опций, например заголовки
  axios.defaults.baseURL = 'http://localhost:3000/api';  

  const res = await axios.post(
      `/posts`, 
      body, 
      { 
        headers: { 
          Authorization: 'YQHJSsG9ZwpXNKMZJSw3vFEoE5A79Y8rk4YXsLNiKx6CPfFNFD9IhAH79ppwaSQW4MDz2aCRRiQEXDv0rWjOulTXQwj8H0pRCTOE'
        } 
      }
    );


//     const res =  axios.get("http://localhost:3000/api/categories")
//       .then(({data}) => {
//     console.log(data);
// })
    
    //Для ередачи токена в заголвке нужно использовать такой хедер
    //Authzorization: '<type> <string>'
    //type - это тип\название данных пользователя например 'Token', string - это сами данные, например 'da7dasda8d7asf8sd7fs'

    const data = res.data;
    SetDataFromServer(data); //Обновляем состояние и записываем полученые данные
  }

  console.log(dataFromServer);

  //Выводим статус из ответа сервер если он есть, а если нету то null
  return (
    <div>
      <AppHeader/>
      <AppMenu/>
      
          <div style={styles}>
                  
      <h1>Posts</h1>
      <button onClick={() => loadData()} class="button"><Link to="/">Добавить пост</Link></button>
      {/* <button class="button"><Link to="/">Главная</Link></button> */}
      {/* <button onclick="document.location='/'" Link to="/posts"> Переход по ссылке</button> */}
      {/* <button class="button"><Link to="/posts">Button</Link></button> */}
      
      {/*   */}
    </div>
    </div>
  );
}

export default PostsPage;
