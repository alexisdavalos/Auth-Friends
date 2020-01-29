import {
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
    friends: [],
    error: ''
  };
  
  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
  };
  