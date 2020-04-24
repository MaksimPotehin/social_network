import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";

function App() {
  return (
          <div className="app-wrapper">
              <HeaderContainer/>
              <NavContainer/>
              <div className='content'>
                  <Route path='/profile/:id?' render={ () => <ProfileContainer/>}/>
                  <Route  path='/dialogs' render={ () => <DialogsContainer/>}/>
                  <Route path='/users' component={UsersContainer}/>
                  <Route path='/news' component={News}/>
                  <Route path='/music' component={Music}/>
                  <Route path='/settings' component={Settings}/>
                  <Route path='/login' component={Login}/>
              </div>
          </div>
  );
}

export default App;
