
// import axios from 'axios';
// import AppHeader from '../components/app-header';
// import AppMenu from '../components/menu'


// function usersPage(params) {// Страница постов
//   const styles = {//Стили для страницы
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//   }

//   const loadData = async () => { //Функция с запросом на сервер

//   axios.defaults.baseURL = 'http://localhost:3000/api';  
  
//     const res =  await axios.get("http://localhost:3000/api/categories")
//       .then(({data}) => {
//     console.log(data);
//     })
//     return res;
  
//    }
//    loadData();
//   return (
//     <div>
//       <AppHeader/>
//       <AppMenu/>
      
//           <div style={styles}>
                  
//       <h1>Users</h1>
//     </div>
//     </div>
//   );
// }

// export default usersPage;



import { useState } from 'react';
import axios from 'axios';
import AppHeader from '../components/app-header';
import AppMenu from '../components/menu'
import { Link } from 'react-router-dom';
// import newPost from '../components/new_post';


function UsersPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  const [dataFromServer, SetDataFromServer] = useState(null); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер

  axios.defaults.baseURL = 'http://localhost:3000/api';  


    const res = axios.get("http://localhost:3000/api/categories")
      .then(({data}) => {
        console.log(res.rp);
})

  }
  return (
    <div>
      <AppHeader/>
      <AppMenu/>
      
    <div style={styles}>
      <h1>Posts</h1>
      <button onClick={() => loadData()} class="button">categories</button>
      <script>
</script>
    </div>
    </div>
  );
}

export default UsersPage;

