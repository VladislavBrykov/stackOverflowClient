import React from 'react'
import './app-header.css';

const AppHeader = () => {
//     myfunction() {
//         console.log("CLICKED");
//   }
    return (
        <div id="header">
        
        <button><img src="https://wizardsourcer.com/wp-content/uploads/2019/03/Stackoverflow.png"  width="100" height="40" alt="my image" width onClick={console.log("CLICKED")} /></button>
        <input id="search" name="search" placeholder="Введите ваш запрос"/>
        <button class="mybtn">Login</button> 
        <button class="mybtn">Registration</button> 
        </div>
    )
}

export default AppHeader;