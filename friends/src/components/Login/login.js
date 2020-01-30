import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {setToken} from '../../actions';

import Nav from '../Navbars/navbar';
const Login = (props) =>{
    console.log('Login Props:', props)
    const initialState = {
        credentials: {
          username: '',
          password: ''
        }
      };
    const [login, setLogin] = useState(initialState)
    //handle form changes
    const handleChange = e => {
        setLogin({
          credentials: {
            ...login.credentials,
            [e.target.name]: e.target.value
          }
        });
        console.log(`${e.target.name} is:`, e.target.value)
      };
    //handle form submission
    const handleLogin = e => {
        e.preventDefault();
        console.log('Loggin in....')
        axios.post('http://localhost:5000/api/login', login.credentials)
        .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        console.log('Logged in:', res)
        props.history.push('/friends')
        })
      .catch(err => console.log(err));
       
      };

    return(
        <div>
        <Nav/>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={login.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={login.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}
const mapStateToProps = state => {
    return{
        title: state.title,
        isLoading: state.isLoading,
        isLogged: state.isLogged,
        token: state.token,
        friends: state.friends,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    {setToken}
)(Login);