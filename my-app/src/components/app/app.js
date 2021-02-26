import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import PostsPage from '../../pages/PostsPage';
import UsersPage from '../../pages/UsersPage';

import './app.css';

const App = () => {
    return (
        // <div className="app">
            <div id ="container">
                {/* <div>
                    <AppHeader/>
                </div>

            <div id="sidebar">
                <AppMenu/>
                    <div id="content">
                        <PostListItem/>
                    </div>
            </div> */}
           
          {/* Добавил путь к '/' и '/posts' используя компоненты react-roter'a
              component - это компонент отвечающий за страницу на данном пути */}

           <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/users" component={UsersPage} />
           </Switch>
      
        </div>
    )
}

export default App;