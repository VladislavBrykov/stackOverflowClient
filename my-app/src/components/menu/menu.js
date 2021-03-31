import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

class AppMenu extends React.Component {



render() {
    return (

<div>
{
  this.props.loggedIn === "admin" || this.props.loggedIn === "user"
    ? this.props.loggedIn === "user"
      ? <div class="btn-group">
        <button class="button">Кабинет user</button>
        <button class="button"><Link to="/">Главная</Link></button>
        <button class="button"><Link to="/categories">Категории</Link></button>
        <button class="button"><Link to="/users">Участники</Link></button>
        <button class="button"><Link to="/posts">Посты</Link></button>
        <button class="button"><Link to="/new-post">Добавить пост</Link></button>
      </div>
      
      : <div class="btn-group">
        <button class="button">Кабинет admin</button>
        <button class="button"><Link to="/">Главная</Link></button>
        <button class="button"><Link to="/categories">Категории</Link></button>
        <button class="button"><Link to="/users">Участники</Link></button>
        <button class="button"><Link to="/posts">Посты</Link></button>
        <button class="button"><Link to="/new-post">Добавить пост</Link></button>
      </div>

    : <div class="btn-group">
        <button class="button">Гость</button>
       <button class="button"><Link to="/">Главная</Link></button>
       <button class="button"><Link to="/categories">Категории</Link></button>
       <button class="button"><Link to="/users">Участники</Link></button>
       <button class="button"><Link to="/posts">Посты</Link></button>
    </div>
}
</div>


    )
  }
}

export default AppMenu;