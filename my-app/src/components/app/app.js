import React from 'react'
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/guest/MainPage';
import PostsPage from '../../pages/guest/PostsPage';
import NewPostsPage from '../../pages/NewPostPage';
import UsersPage from '../../pages/guest/UsersPage';
import LoginPage from '../../pages/guest/LoginPage';
import RegistrationPage from '../../pages/guest/RegistrationPage';
import PasswordReset from '../../pages/guest/PasswordReset';
import CategoriesPage from '../../pages/guest/CategoriesPage';
import PostIdPage from '../../pages/guest/PostIdPage';
import fon from './fon.jpg';

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
            <Route exact path="/new-post" component={NewPostsPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/password-reset" component={PasswordReset} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/post-id/:id" component={PostIdPage} />
           </Switch>
      
        </div>
    )
}

export default App;