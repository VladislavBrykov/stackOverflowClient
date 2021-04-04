import { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersPaje.css';
import '../../components/posts/posts.css'
// import newPost from '../components/new_post';

import 'rc-pagination/assets/index.css';

function CommentsPage(params) {// Страница постов
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
      }
    
      const [CurrentPage, changeCurrentPage] = useState(1)
      const [dataFromServer, setDataFromServer] = useState([]); //Используем хук состояния для данных с сервера
    
      const loadData = async () => { //Функция с запросом на сервер


    params = window.location.href; //получаем полную ссылку страницы
    params = params.match(/post-id([^ ]*)/)[1];   //получаем все что идет после /post-id
    params = parseInt(params.replace(/\D+/g, ""));  //получаем айди поста со ссылки
    console.log(params + "++++++");

        axios.defaults.baseURL = 'http://localhost:3000/api';
        const res = await axios.get("http://localhost:3000/api/posts")
        console.log(res.data.rp);
        setDataFromServer(res.data.rp.reverse())
      }
    
      useEffect(() => {
        loadData()
      }, [])
    
      return (
        <div style={styles}>
    
          {
            dataFromServer.map((item, index) => index < CurrentPage * 5 && index >= (CurrentPage - 1) * 5
              ? <div id="pressed">
                <h2 id="h2" key={index}>{item.comments}</h2>
                {/* <h3 id="h4" key={index}>{item.content}</h3> */}
                <button className="button"><Link to={'/post-id' + '/' + item.id}>Посмотреть</Link></button>
              </div>
              : null)
          }
    
          {
            dataFromServer.length
              ? <div className="p-2">
                <Pagination className="" onChange={(current) => changeCurrentPage(current)} defaultCurrent={1} total={Math.ceil(dataFromServer.length / 5) * 10} />
              </div>
              : <h2>Постов пока нет</h2>
          }
    
        </div>
      );
    }
    
 
export default CommentsPage;

