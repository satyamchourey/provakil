import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to GOmegle!!!</h1>
                <div>
                    <form>
                        <label htmlFor="username">Select username</label>
                        <input onChange={this.props.getUser} id='username' type="text" />
                        <Link to='/chatRoom'><button type='submit' id='join'>submit</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}
