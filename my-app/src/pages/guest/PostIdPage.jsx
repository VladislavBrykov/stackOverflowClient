
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersPaje.css';
import '../../components/posts/posts.css'
// import newPost from '../components/new_post';


function PostIdPage(params) {// Страница постов


  const styles = {//Стили для страницы
    position: 'absolute',
    top: '-7px',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  let result;
  let username;

  const [dataFromServer, setDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер
    params = window.location.href; //получаем полную ссылку страницы
    params = params.match(/post-id([^ ]*)/)[1];   //получаем все что идет после /post-id
    params = parseInt(params.replace(/\D+/g, ""));  //получаем айди поста со ссылки

    axios.defaults.baseURL = 'http://localhost:3000/api';
    const res = await axios.get("http://localhost:3000/api/posts/" + params)
    result = res.data.rp;
    console.log(result);

    axios.defaults.baseURL = 'http://localhost:3000/api';
    const category = await axios.get("http://localhost:3000/api/categories/" + result[0].id_categiries)
    result[0].category = category.data.rp[0].category;

    axios.defaults.baseURL = 'http://localhost:3000/api';
    username = await axios.get("http://localhost:3000/api/users/" + result[0].id_user)
    console.log(username);

    result[0].username = username.data.rp.login;

    axios.defaults.baseURL = 'http://localhost:3000/api';
    const comment_1 = await axios.get("http://localhost:3000/api/posts/" + result[0].id + "/comments")
    if(comment_1.data.rp[0])
    result[0].comment_1 = comment_1.data.rp[0].comment;
    else {
      result[0].comment_1 = "comment exists";
    }
  
   
    //axios.defaults.baseURL = 'http://localhost:3000/api';
    //const comment_2 = await axios.get("http://localhost:3000/api/posts/" + result[0].id + "/comments")
    //result[1].comment_2 = comment_2.data.rp[1].comment;

    console.log(comment_1);
    ////console.log(result);
    //  result = {
    //     "id": res.data.rp.id,
    //     "content": res.data.rp.content,
    //     "title": res.data.rp.title
    //  }
    setDataFromServer(result)
  }

  return (
    <div>

      <div style={styles}>
        {/* Метод для вывода данных из массива */}
        {/* Ошибка была из-за того что запрос асинхронный, а мы пытали сразу выводить. А изначально стейут у нас null */}
        {
          dataFromServer
            // И тут выходит мы српвшиваем, если у нас есть что-то в стейте, тогда выводим этот стейт, а если нет, то тогда показываем лоадер !
            // как то так )
            ? dataFromServer.map((item, index) =>
              // <div class="wrap" id="pressed">
              //   <h2 class="flex" key={index}>{item.title}</h2>

              //   <h4 class="flex" key={index}>{item.content}</h4>
              //   <label>Название</label>
              // </div>)
              <div style={styles} class="form_auth_block">
                <div class="form_auth_block_content">
                  <p class="form_auth_block_head_text" key={index}>{item.title}</p>
                  <form class="form_auth_style" action="#" method="post">
                    <label key={index}>{item.content}</label>
                    <label key={index}>{item.username}</label>
                    <label key={index}>{item.category}</label>

                    <label key={index}>{"comment: " + item.comment_1}</label>
                    <label key={index}>{item.comment_2}</label>

                    <button class="dislike"><i class="fa fa-thumbs-o-down" aria-hidden="true">+</i></button>
                    <button class="like" placeholder="-"><i class="fa fa-thumbs-o-up" aria-hidden="true">-</i></button>

                    <label>Вы можете оставить комментарий</label>
                    <textarea rows="1" cols="52" name="textArea" required></textarea>
                    <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/posts">Добавить комментарий</Link></button>
                    <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/posts">Читать все комментарии</Link></button>

                    {/* <button class="learnmore">Читать все комментарии</button> */}



                  </form>
                </div>
              </div>)
            : document.addEventListener('DOMContentLoaded', loadData()) //показать всех пользователей запуск функции при загрузке страници

        }
        <script>
        </script>
      </div>
    </div>
  );





}
export default PostIdPage;