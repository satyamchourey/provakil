import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Gomegle from './gomegle';
import Login from './login';

function App() {

  
  var username = '';
   var channel = '';
   var timeStamp ;

  function getUser() {
    
    channel=document.getElementById('channel').value;
    username = document.getElementById("username").value;
    timeStamp = Date();
    console.log(username);
    console.log(channel);
    console.log(timeStamp);
    
  }


  

  return (
    <div className="App">
      <Route exact path='/' render={() => <Login getUser={getUser} />} />
      <Route path='/chatRoom' render={() => <Gomegle timeStamp={timeStamp} username={username}  />} />
    </div>

  );
}

export default App;
