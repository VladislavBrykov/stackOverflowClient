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
import Footer from './../Footer'

import RegisterTokenPage from '../../pages/guest/RegisterTokenPage'
import AccauntPage from '../../pages/Accaunt.jsx'
import CommentsPage from '../../pages/guest/PostsPage';

import './app.css';

const App = () => {
    const [loggedIn, setloggedIn] = useState()

    const changeLoggedIn = (state) => setloggedIn(state)

    return (
        <div>

            <AppHeader loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />
            <AppMenu loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />

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

                    <Route exact path="/register/:id" render={() => <RegisterTokenPage />} />
                    <Route exact path="/accaunt" render={() => <AccauntPage />} />
                    <Route exact path="posts/:id/comments" render={() => <CommentsPage />} />
                </Switch>

            </div>

            <Footer />

        </div>
    )
}

export default App;