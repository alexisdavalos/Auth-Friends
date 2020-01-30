import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {setToken} from '../../actions';
import { FormGroup, Form, Input, Label, Button } from 'reactstrap';



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
        <div className='Title'>
            <img width='500px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1280px-Friends_logo.svg.png'/>
        </div>
      
        <Form className='LoginForm' onSubmit={handleLogin}>
            <Label>Username:</Label>
            <Input
                type="text"
                name="username"
                value={login.credentials.username}
                onChange={handleChange}
            />
             <Label>Password</Label>
            <Input
                type="password"
                name="password"
                value={login.credentials.password}
                onChange={handleChange}
            />
          <Button color='info'>Log in</Button>
        </Form>
    
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