import React, { Component } from 'react'

export default class Gomegle extends Component {
    render() {
        return (
            <div className='Gomegle'>
<section>
<h1>Welcome {this.props.username}</h1>
                {console.log(this.props.username)}
</section>
<section className='screen' >
<div className='chatWindow' style={{height:'200px'}}>
    <ul id='screenMsg'>

    </ul>
</div>
<div  style={{display:'inline-grid'}}>
<textarea id='textMsg' name="msg" onChange={this.props.getMsg} cols="30" rows="3"></textarea>
<button onClick={this.props.showText} type="submit">Send Message</button>
</div>
</section>
               
            </div>
        )
    }
}
