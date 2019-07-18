import React, { Component } from 'react'
import axios from 'axios';

export default class Gomegle extends Component {

    state={chats:[]}

    componentDidMount(){
        setInterval(()=>{
            axios.get(`http://localhost:1337/messages`)
           .then(res => {
              console.log(res);
             const chats = res.data;
             this.setState({ chats });
           })
        },1000)
        
       }
 submitMsg = ()=>{
    axios.post(`http://localhost:1337/messages`, {
        "msg":document.getElementById('textMsg').value,
        "username": this.props.username
     })
     .then(res => {
        document.getElementById('textMsg').value= '';
       console.log(res);
       console.log(res.data);
     })
 }


    render() {
        return (
            <div className='Gomegle'>
            {/* style={{height:''}} */}
<section>
<h1>Welcome {this.props.username}</h1>
        <p>Logged in at : {this.props.timeStamp}</p>        
        {console.log(this.props.username)}
</section>
<section className='screen' >


<div className='chatWindow' style={{height:'200px', overflowY:'scroll'}}>
    <ul id='screenMsg'   >
{this.state.chats.map((chat)=>{
    return <div>{chat.msg + ':' + chat.username}</div>
})}
    </ul>
</div>
<div  style={{display:'inline-grid'}}>
<textarea id='textMsg' name="msg"  cols="30" rows="3"></textarea>
<button onClick={this.submitMsg} type="submit">Send Message</button>
</div>
</section>
               
            </div>
        )
    }
}
