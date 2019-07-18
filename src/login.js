import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to GOmegle!!!</h1>
                <div>
                    <form>
                        <div>
                        <label htmlFor="channel"> Select group : </label>
                        <select  id='channel'>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                            <option value="college">College</option>
                            <option value="roomies">Roomies</option>
                        </select>
                        </div>
                        <label htmlFor="username">Select username</label>
                        <input  id='username' type="text" />
                        <Link to='/chatRoom'><button onClick={this.props.getUser} type='submit' id='join'>submit</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}
