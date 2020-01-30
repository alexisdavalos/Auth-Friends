import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const CREATE_FRIEND_START = "CREATE_FRIEND_START";
export const CREATE_FRIEND_SUCCESS = "CREATE_FRIEND_SUCCESS";
export const CREATE_FRIEND_FAILURE = "CREATE_FRIEND_FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const setToken = (token) => dispatch => {
    console.log('setToken Called');
    dispatch({ type: LOGIN_SUCCESS, payload: token });
};
export const fetchFriends = () => dispatch => {
	dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
    .get('/api/friends')
		.then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data}))
		.catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }))
};

export const createFriend = (friend) => dispatch => {
    dispatch({ type: CREATE_FRIEND_START });
    axiosWithAuth()
    .post(`http://localhost:3333/FRIENDs`, friend)
    .then(res => dispatch({ type: CREATE_FRIEND_SUCCESS, payload: res.data })) 
    .catch(err => dispatch({ type: CREATE_FRIEND_FAILURE, payload: err }));
  };

  export const deleteFriend = (id) => dispatch => {
    dispatch({ type: CREATE_FRIEND_START });
    axiosWithAuth()
    .delete(`http://localhost:3333/FRIENDs/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
  };
