import React from 'react'
import './app-header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: localStorage.role
    };
  }
  render() {

    const loadData = async () => { //Функция с запросом на сервер
  
      axios.defaults.baseURL = 'http://localhost:3000/api';  
      const body = {};
      const res = await axios.post(
        `/auth/logout`,
        body,
        {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
      );
      delete localStorage.jwtToken;
      delete localStorage.role;
      this.state.role = null;
      //window.location.reload(); 
    }

    let loginButton;

    if (this.state.role === "admin") {
      loginButton = 
      <div class="header"> 
        <button id="btn" onClick={() => loadData()}><Link to="/login">Logout</Link></button>;
      </div>
    }

    else {
      loginButton = 
      <div class="header"> 
        <button id="btn"><Link to="/login">Login</Link></button>;
        <button id="btn"><Link to="/registration">Registration</Link></button>
        <a href="/login" class="logo">Возможности ограничены: Авторизируйтесь</a>
      </div>
    }

    return (
      <div class="header">
        {loginButton}
      </div>
    );
  }
}

export default AppHeader;




// const AppHeader = () => {
//   let loginButton;
//   let registrationButton;
//   let logo;

    // const loadData = async () => { //Функция с запросом на сервер
  
    //   axios.defaults.baseURL = 'http://localhost:3000/api';  
    //   const body = {};
    //   const res = await axios.post(
    //     `/auth/logout`,
    //     body,
    //     {
    //     headers: {
    //       Authorization: localStorage.jwtToken
    //     }
    //   }
    //   );
    //   delete localStorage.jwtToken;
    //   //window.location.reload(); 
    //    console.log(res.data);
    //    console.log(localStorage.jwtToken);
    // }

//     if (localStorage.jwtToken) {
//       //loginButton = <button id="btn" class="active" onClick={() => loadData()} >Выйти</button>
//       // loginButton = <button id="btn">onClick={() => loadData()}<Link to="/">Logout</Link></button>;
//       loginButton = <button id="btn" onClick={() => loadData()}><Link to="/login">Logout</Link></button>;
       
//      } else {
//        loginButton = <button id="btn"><Link to="/login">Login</Link></button>;
//        registrationButton = <button id="btn"><Link to="/registration">Registration</Link></button>
//        logo = <a href="/login" class="logo">Возможности ограничены: Авторизируйтесь</a>
//      }
    
//     return (
//       <div class="header">
//         {logo}
//         <div class="header-right">
//           <a class="active" href="#home">Home</a>
//           {loginButton}
//           {registrationButton}
//         </div>
//       </div>
//     )
// }

// export default AppHeader;