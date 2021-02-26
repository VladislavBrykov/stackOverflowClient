import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

const AppMenu = () => {
//     myfunction() {
//         console.log("CLICKED");
//   }
    return (
		// <div class="btn-group">
		// <button class="button">Главная</button>
		// <button class="button">Категории</button>
		// <button class="button">Участники</button>
		// <button class="button">Button</button>
	  // </div>

    //добавил компонент Link вместо button. Линки оставил обернутыми в кнопки для стилей, а так они не нужны

    <div class="btn-group">
      <button class="button"><Link to="/">Главная</Link></button>
      <button class="button"><Link to="/categories">Категории</Link></button>
      <button class="button"><Link to="/members">Участники</Link></button>
      <button class="button"><Link to="/posts">Button</Link></button>
    </div>

    )
}

export default AppMenu;