import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Gomegle from './gomegle';
import Login from './login';

function App() {
var username='';
var textMsg='';

  function getUser(event) {

    username=event.target.value;
  // console.log(username);
  }
  function getMsg(event){
textMsg=event.target.value;

  }
  function showText(event){
    console.log(textMsg);
    var screenMsg = document.getElementById('screenMsg');
    var msgT = textMsg  + ' : ' + username ;  
   
    //  screenMsg.appendChild(msg);
    var msg=document.createElement('div');
    msg.append(msgT);
    screenMsg.append( msg );
  }

  return (
    <div className="App">
    <Route exact path='/' render={()=><Login getUser={getUser}/>} />
    <Route path='/chatRoom' render={()=><Gomegle username={username}  getMsg={getMsg} showText={showText}/>}/>


    </div>

  );
}

export default App;
