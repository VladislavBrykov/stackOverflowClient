import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/new_post/new_post.css';

function NewPostsPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)'
  }


  
  const [dataFromServer, SetDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер

    let title = document.getElementById('titleBody').value;
    let content = document.getElementById('contentBody').value;
    let categories = document.getElementById('categoriesBody').value;
    let id = localStorage.id;

    console.log(localStorage.id);
    // let content = document.getElementById('Editor');
    // let categories = document.getElementById('Editor');


    const body = { "title": title, "content": content, "categories": categories, "user": id } // То что передаем на сервер
    console.log(body);
    // в axios первый агрумент url, воторой тело, третий объект опций, например заголовки
    axios.defaults.baseURL = 'http://localhost:3000/api';

    const res = await axios.post(
      `/posts`,
      body,
      {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
    );
    console.log();

    //     const res =  axios.get("http://localhost:3000/api/categories")
    //       .then(({data}) => {
    //     console.log(data);
    // })

    //Для ередачи токена в заголвке нужно использовать такой хедер
    //Authzorization: '<type> <string>'
    //type - это тип\название данных пользователя например 'Token', string - это сами данные, например 'da7dasda8d7asf8sd7fs'

    const data = res.data;
    SetDataFromServer(data); //Обновляем состояние и записываем полученые данн
    window.location.reload();

  }

  console.log(dataFromServer);
  

  //Выводим статус из ответа сервер если он есть, а если нету то null


  return (
    <div>
      <div>
        <div style={styles} class="form_auth_block">
          <div class="form_auth_block_content">
            <p class="form_auth_block_head_text">Новая запись</p>
            <form class="form_auth_style" action="#" method="post">
              <label>Название</label>
              <textarea rows="1" cols="52" name="textArea" id="titleBody" required></textarea>
              <label>Опишите проблему</label>
              <textarea rows="15" cols="52" name="textArea" id="contentBody" required></textarea>
              <label>Введите категорию</label>
              <textarea rows="1" cols="52" name="textArea" id="categoriesBody" required></textarea>
              <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/posts">Добавить запись</Link></button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostsPage;
