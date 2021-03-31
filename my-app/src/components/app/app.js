import React, { useState } from 'react'
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
import AppHeader from './../app-header';
import AppMenu from './../menu'
import fon from './fon.jpg';

import './app.css';

const App = () => {
    const [loggedIn, setloggedIn] = useState()

    const changeLoggedIn = (state) => setloggedIn(state)

    return (
        // <div className="app">
        <div id="container">
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

            <AppHeader loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />
            <AppMenu loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />

            <Switch>
                <Route exact path="/" render={() => <MainPage />} />
                <Route exact path="/posts" render={() => <PostsPage />} />
                <Route exact path="/new-post" render={() => <NewPostsPage />} />
                <Route exact path="/users" render={() => <UsersPage />} />
                <Route exact path="/login" render={() => <LoginPage changeLoggedIn={changeLoggedIn} />} />
                <Route exact path="/registration" render={() => <RegistrationPage />} />
                <Route exact path="/password-reset" render={() => <PasswordReset />} />
                <Route exact path="/categories" render={() => <CategoriesPage />} />
                <Route exact path="/post-id/:id" render={() => <PostIdPage />} />
            </Switch>

        </div>
    )
}

export default App;