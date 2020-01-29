import axios from 'axios'
import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    FETCH_FRIENDS_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    CREATE_FRIEND_START,
    CREATE_FRIEND_SUCCESS,
    CREATE_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE
} from '../actions'

const initialState = {
    title: 'I am inside the Redux Store',
    isLoading: false,
    isLogged: false,
    token:'',
    friends: 'empty',
    error: ''
  };
  
  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                friends: action.payload
            }
        case LOGIN_START:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
  };
  