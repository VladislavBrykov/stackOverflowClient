
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersPaje.css';
// import newPost from '../components/new_post';

import userImg from './user.png'

const styles = {
  marginLeft: '180px'
}

export default ({ }) => {
  const [dataFromServer, setDataFromServer] = useState({
    avatar: '',
    email: 'test@mail.ru',
    login: 'testlogin'
  }); //Используем хук состояния для данных с сервера
  const newFile = useRef()

  const loadData = async () => { //Функция с запросом на сервер

    axios.defaults.baseURL = 'http://localhost:3000/api';

    const res = await axios.get("http://localhost:3000/api/users/" + localStorage.id)
    console.log(res);
    setDataFromServer(res.data.rp)
  }

  const uploadAvatar = async (image) => {

    var formData = new FormData();
    formData.append("image", image);

    let res = await axios.post('http://localhost:3000/api/users/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.jwtToken
      }
    }).catch(err =>{
      alert(`Что-то пошло нет так. ${err.message}`)
    })

    // я понял почему так, вам нужно сделать на стороне сервера, чтобы после обновления картинки озвращалась аватарка в таком пути res.data.rp.avatar
    //А сейчас можно пока сделать повторный запрос на сервер за данными

    // можно добавить обработчик ошибок

    if (res.status == 200)
      loadData()

  }

  useEffect(() => {

    loadData()

  }, [])

  return (
    <div style={styles}>
      {/* Метод для вывода данных из массива */}
      {/* Ошибка была из-за того что запрос асинхронный, а мы пытали сразу выводить. А изначально стейут у нас null */}
      {
        dataFromServer ?
          <div className={'profile-info'}>
            <div className="avatar">
              <img src={dataFromServer.avatar ? `http://localhost:3000/${dataFromServer.avatar}` : userImg} alt="avatar" />
              <div className="change-avatar">
                <label htmlFor={"newFile"} className={''}>
                  изменить аватар
                </label>
                <input ref={newFile} accept={'image/x-png,image/jpeg'} onChange={(e) => uploadAvatar(e.target.files[0])} id={'newFile'} type="file" className={'invisible-input'} />
              </div>
            </div>
            <div className="info">
              <div className="info-item">
                <label>Почта</label>
                <input type="text" value={dataFromServer.email} readOnly />
              </div>
              <div className="info-item">
                <label>Логин</label>
                <input type="text" value={dataFromServer.login} readOnly />
              </div>
            </div>
          </div>
          : null
      }
    </div>
  );

};

