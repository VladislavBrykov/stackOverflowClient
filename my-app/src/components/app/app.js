import React from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import AppMenu from '../menu'
import PostListItem from '../post-list-item'
import './app.css';

const App = () => {
    return (
        // <div className="app">
            <div id ="container">
                <div>
                    <AppHeader/>
                </div>

            <div id="sidebar">
                <AppMenu/>
                    <div id="content">
                        <PostListItem/>
                    </div>
            </div>
           
        
            {/* <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div> */}
            {/* <PostList/> */}
      
        </div>

        
    )
}

export default App;